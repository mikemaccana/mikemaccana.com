import * as agave from  "./thirdparty/agave.js";
import {lory} from './thirdparty/lory/lory.js';
import Masonry from './thirdparty/masonry/masonry.js';

import WorkViewer from "./templates/works.html";

import './element-on.js';

import works from "./data/works.js";

agave.enable('av');

const LEFT = 37,
	RIGHT = 39

var select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document),
	log = console.log.bind(console);

// Return index of node under its parents. Eg, if you're the fourth child, return 3.
Element.prototype.avgetParentIndex = function() {
	return Array.prototype.indexOf.call(this.parentNode.children, this);
}

const showPortfolio = function(){

	const workViewerComponent = new WorkViewer({
		target: document.querySelector('.works-wrapper'),
	});

	workViewerComponent.on('complete', function(){

		var worksRactive = this;

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

	})
};

export default showPortfolio;
