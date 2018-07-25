<div class="slider js_slider">
	<div class="frame js_frame">
		<div class="slides js_slides">
			{#each works as work, index}
				<div class={ getSlideClasses(index, currentIndex) }>
					<img src="/images/work/screenshots/{ works[index].slug }-0.{ works[index].imageExtension }"  alt="Not provided"/>
				</div>
			{/each}
		</div>
	</div>
	<span class="js_prev previous">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#CCC" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
	</span>
	<span class="js_next next">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#CCC" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
	</span>
</div>

<div class="work-description">
	<div class="work-description-content">
		<h3 class="work-title">{ works[currentIndex].title }</h3>
		<img class="work-logo" src="/images/logos/{ works[currentIndex].client }.png"  alt="Not provided"/>
		<div class="work-lede">{ works[currentIndex].lede }</div>
	</div>
</div>



<script>	
	import {lory} from '../js/thirdparty/lory/lory.js';
	import Masonry from '../js/thirdparty/masonry/masonry.js';
	import '../js/utils/element-on.js';
	import '../js/utils/get-parent-index.js';

	const LEFT = 37,
		RIGHT = 39;

	var select = document.querySelector.bind(document),
		selectAll = document.querySelectorAll.bind(document),
		log = console.log.bind(console);

	export default {
		helpers: {
			// See https://svelte.technology/repl?version=2.9.5&gist=58899a3fd6ebf7867d95f8a91dec92c5
			getSlideClasses: function(index, currentIndex) {
				let classes = ['js_slide']
				if ( index === currentIndex ) {
					classes.push('selected')
				}
				if ( index === 0 ) {
					classes.push('first')
				}
				return classes.join(' ')
			}
		},
		oncreate: function(){

			var component = this;

			var body = select('body'),
				slider = select('.js_slider'),
				closeElement = select('.close');

			var log = console.log.bind(console);

			// Set up slider
			// 'rewind' option is not used per https://github.com/meandmax/lory/issues/197
			var loryController = lory(slider);

			log(`Slider is ${slider}`)

			// Set up showing work detail after sliding
			slider.addEventListener('after.lory.slide', function(event){
				var currentSlide = event.detail.currentSlide
				log(`After slide! currentSlide is ${currentSlide}`)
				component.set({'currentIndex': currentSlide})	
			});

			// When the window resizes Lory will
			// go to slide 0, so we'll need to make sure the descriptions are updated too
			slider.addEventListener('on.lory.resize', function(event){
				component.set({'currentIndex': 0})
			});

			window.addEventListener('keyup', function(event){
				if ( event.keyCode === LEFT ) {
					loryController.prev()
				}
				if ( event.keyCode === RIGHT ) {
					loryController.next()
				}
			})

			var enableModal = function(work){
				component.set({'isModalEnabled': true})	

				// Masonry
				var masonryElement = document.querySelector('.screenshots');
				new Masonry( masonryElement, {
					itemSelector: '.tile',
					// Must be same as $masonry-base in work-detail.css
					columnWidth: 340 / 2
				});

			}
		
			var disableModal = function(){
				component.set({'isModalEnabled': false});
			};

			// Set up showing work detail when items are clicked
			body.on('click', '.js_slide.selected img', function(event){
				var clickedWorkIndex = event.target.avgetParentIndex();
				log(`Clicked!, ${works}`)
				enableModal(works[clickedWorkIndex])
			})

			closeElement.addEventListener('click', function(event){
				disableModal();
			})

			// Fade in each item individually
			selectAll('.works .work').forEach(function(element, index){
				setTimeout(function(){
					element.classList.toggle('visible');
				}, index * 300)
			})
			select('.work-description').classList.toggle('visible');
		}
	}

	
</script>	

<style>
	@import url("../css/colors.css");
	@import url("../css/metrics.css");

	/* Modify 'columnWidth' value in works.js if this is changed */
	:root {
		--masonry-base: 340px;
	}

	/* Hide things until monogram has loaded */
	body.loading .slider, body.loading .work-description {
		visibility: hidden;
		/* Centers monogram until content has loaded */
		transform: translateY(40%);
	}

	.slider {
		/* Needed for previous and next buttons to be vertically centered correctly */
		position: relative;
	}

	.slides {
		display: grid;
		align-items: center;  

		/* Hack required since lory.js wasn't designed for CSS grid
		Removing this causes the slides area to be cut off */
		width: 9752px;	
	}

	.js_slide {
		grid-row: 1; 

		/*Needs to be defined (or a width set individually on each) for slider buttons to work */
		width: 400px;

		/*Darken and zoom out till selected */
		opacity: 0.3;
		transition: all 0.1s ease-out;
		transform: scale(0.6);
		filter: blur(2px);
	}

	.js_slide.selected {
		opacity: 1;
		transform: scale(1);
		filter: none;
		cursor: pointer;
	}

	.js_slide img { 
		/*Make images fit in container (they're retina) */
		width: 100%;
		/*Some images have transparent backgrounds */
		background-color: white;			
	}

	.previous, .next {
		position: absolute;
		top: 50%;
		margin-top: -25px;
		display: block;
		cursor: pointer;
		
	}

	.previous svg, .next svg {
		width: 50px;
	}
	
	.next {
		right: 0;
	}
	
	.previous {
		left: 0;
	}

	.works-wrapper {
		width: 100vw;
		margin: 0;
	}

	.work-description.visible {
		opacity: 1;
	}

	.work-description {
		opacity: 0;
		display: grid;
		justify-items: center;
	}

	.work-description-content {
		max-width: 600px;
		padding: var(--spacing);	
		text-align: left;
	}

	.work-title {
		font-size: 26pt;
		margin: calc(var(--spacing) / 4) 0;
		width: 70%;
	}

	.work-logo {
		width: 30%;
	}

	.work-title, .work-logo, .work-lede {
		float: left;
	}

	.work-lede p {
		margin: calc(var(--spacing) / 4) 0;
	}

	/* @media screen and (max-width: var(--small-desktop-threshold-width)) {

		.content {
			grid-template-rows: 250px 1fr;
		}

		.work-title {
			font-size: 16pt;
		}
		.work-logo {
			margin: 6px 0;
		}
		.work-lede {
			font-size: 10pt;
		}

		.slider .frame .slides {
			height: 200px;
			margin-top: 0;
		}		
	} */
</style>
