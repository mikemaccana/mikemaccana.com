<h1>{hours}</h1>

<div class="slider js_slider">
	<div class="frame js_frame">
		<div class="slides js_slides">
			{#each works as work, index}
				<div class='{ getSlideClasses(index) }'>
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

<div class="modal-shade" display='{ getModalDisplay }'>
	<div class="modal">
		<div class="text">			
			<h1>{ works[currentIndex].title }</h1>
			<div class="screenshot-container">
				<div class="screenshots">					
					<div class="tile description">{ works[currentIndex].description }</div>
					{#each new Array(works[currentIndex].screenshotCount) as screenshotIndex}
						<img class="tile" src="/images/work/screenshots/{ works[currentIndex].slug }-{screenshotIndex}.{ works[currentIndex].imageExtension }"  alt="Not provided"/>
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
				isModalEnabled: false,
				time: new Date()
			}
		},
		helpers: {
			getSlideClasses: ( {currentIndex} ) => {
				// let currentIndex = this.get('currentIndex');
				return index => {
					let classes = ['js_slide']
					if ( index === currentIndex ) {
						classes.push('selected')
					}
					if ( index === 0 ) {
						classes.push('first')
					}
					return classes.join(' ')
				}				
			}		
		},
		computed: {
			hours: ({ time }) => time.getHours(),
			
			getModalDisplay: ({isModalEnabled}) => {
				if ( isModalEnabled) {
					return "grid"
				}
				return "none"
			}
		},
		oncreate: () => {

			var body = select('body'),
				slider = select('.js_slider'),
				closeElement = select('.close');

			// Set up slider
			// 'rewind' option is not used per https://github.com/meandmax/lory/issues/197
			var loryController = lory(slider);

			// Set up showing work detail after sliding
			slider.addEventListener('after.lory.slide', function(event){
				var currentSlide = event.detail.currentSlide
				log(`After slide! currentSlide is ${currentSlide}`)
				worksRactive.set('currentIndex', currentSlide)	
			});

			// When the window resizes Lory will
			// go to slide 0, so we'll need to make sure the descriptions are updated too
			slider.addEventListener('on.lory.resize', function(event){
				worksRactive.set('currentIndex', 0)
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
				worksRactive.set('isModalEnabled', true)	

				// Masonry
				var masonryElement = document.querySelector('.screenshots');
				new Masonry( masonryElement, {
					itemSelector: '.tile',
					// Must be same as $masonry-base in work-detail.css
					columnWidth: 340 / 2
				});

			}
		
			var disableModal = function(){
				worksRactive.set('isModalEnabled', false);
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

