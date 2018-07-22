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

<div class="work-description loading">
	<div class="work-description-content">
		<h3 class="work-title">{ works[currentIndex].title }</h3>
		<img class="work-logo" src="/images/logos/{ works[currentIndex].client }.png"  alt="Not provided"/>
		<div class="work-lede">{ works[currentIndex].lede }</div>
	</div>
</div>

<div class="modal-shade" style="display: { modalDisplay };">
	<div class="modal">
		<div class="text">			
			<h1>{ works[currentIndex].title }</h1>
			<div class="screenshot-container">
				<div class="screenshots">					
					<div class="tile description">{@html works[currentIndex].description }</div>
					{#each new Array(works[currentIndex].screenshotCount) as unused, screenshotIndex}
						<img class="tile" src={ getImageFileName(works[currentIndex], screenshotIndex) } alt="Not provided {screenshotIndex}"/>
					{/each}						
				</div>
			</div>
		</div>
		<img class="close" src="/images/icons/close.png" alt="Not provided"/>
	</div>
</div>


<script>
	// This is the 'component definition'
	import works from "./data/works.js";
	import {lory} from './thirdparty/lory/lory.js';
	import Masonry from './thirdparty/masonry/masonry.js';
	import './element-on.js';
	import './get-parent-index.js';

	const LEFT = 37,
		RIGHT = 39

	var select = document.querySelector.bind(document),
		selectAll = document.querySelectorAll.bind(document),
		log = console.log.bind(console);

	export default {
		data: function(){
			return {
				works,
				currentIndex: 0,
				isModalEnabled: false
			}
		},
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
			},
			getImageFileName: function(currentWork, screenshotIndex){
				return `/images/work/screenshots/${ currentWork.slug }-${screenshotIndex}.${ currentWork.imageExtension }`
			},
		},
		computed: {
			modalDisplay: ({isModalEnabled}) => {
				if ( isModalEnabled ) {
					return "grid"
				}
				return "none"
			}
		},
		oncreate: function() {

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
				enableModal(works[clickedWorkIndex])
			})

			closeElement.addEventListener('click', function(event){
				disableModal();
			})
		}
	}
</script>	

<style type="text/sass">
	@import "../scss/colors.scss";
	@import "../scss/metrics.scss";
	@import "../scss/mixins.scss";

	$modal-height: 500px;

	// Modify 'columnWidth' value in works.js if this is changed
	$masonry-base: 340px;

	.modal-shade {
		display: grid;
		width: 100%;
		position: absolute;
		height: 100%;
		top: 0;
		bottom: 0;
		background-color: $shadedgrey;
		z-index: 2; 
		align-content: center;
		.modal {
			z-index: 3;
			grid-row: 1;		
			background-color: black;		
			height: $modal-height;
			opacity: 1;		
			position: relative;
			.text {
				padding: $spacing;
				width: $single-column-threshold-width;
				max-width: 100%;
				color: whitesmoke;
				margin: 0 auto;
				button {
					border: 1px solid whiteSmoke;
				}
				h1 {
					margin: 0 0 $spacing 0;
				}
				
				.screenshot-container {
					max-width: 100%;
					.screenshots {
						> * {
							padding: 12px; 
						}
						.tile {
							width: $masonry-base / 2;
							
							&:first-of-type {
								width: $masonry-base;
							}
							&.description {
								width: $masonry-base;
								font-size: 12pt;
							}
						}
					}
				}
			}
			.close {
				cursor: pointer;
				position: absolute;
				right: $spacing;
				top: $spacing;
			}
		}
	}

	.slider {
		// Needed for previous and next buttons to be vertically centered correctly
		position: relative;
		.frame {
			.slides {
				display: grid;
				align-items: center;  

				// Hack required since lory.js wasn't designed fro CSS grid
				// Removing this causes the slides area to be cut off
				width: 9752px;
				
				.js_slide {
					grid-row: 1; 

					// Needs to be defined (or a width set individually on each) for slider buttons to work
					width: 400px;

					// Darken and zoom out till selected
					opacity: 0.3;
					transition: all 0.1s ease-out;
					transform: scale(0.6); // Zoom effect
					filter: blur(2px);
					&.selected {
						opacity: 1;
						transform: scale(1);
						filter: none;
						cursor: pointer;
					}
					img { 
						// Make images fit in container (they're retina)
						width: 100%;
						// Some images have transparent backgrounds
						background-color: white;			
					}
				}
			}
		}
		.previous, .next {
			position: absolute;
			top: 50%;
			margin-top: -25px;
			display: block;
			cursor: pointer;
			svg {
				width: 50px;
			}
		}
		
		.next {
			right: 0;
		}
		
		.previous {
			left: 0;
		}
	}
</style>
