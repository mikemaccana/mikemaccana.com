import * as ractive from "/js/thirdparty/ractive.js";
import * as agave from  "/js/thirdparty/agave.js";
import {lory} from '/js/thirdparty/lory/lory.js';
import Masonry from '/js/thirdparty/masonry/masonry.js';

import worksTemplate from "/js/templates/works.js";

import works from "/js/data/works.js";

agave.enable('av');

var Ractive = ractive.Ractive

var select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document),
	log = console.log.bind(console);

// Return index of node under its parents. Eg, if you're the fourth child, return 3.
Element.prototype.avgetParentIndex = function() {
	return Array.prototype.indexOf.call(this.parentNode.children, this);
}

// https://stackoverflow.com/questions/25248286/native-js-equivalent-to-jquery-delegation
HTMLElement.prototype.on = function(event, selector, handler) {
	this.addEventListener(event, function(event) {
		let target = event.target;
		if (target.matches(selector) ) {
			handler.call(target, event);
		}
	});
};

const showPortfolio = function(){

	var worksRactive = new Ractive({
		el: '.works-wrapper',
		template: worksTemplate,
		data: {
			works,
			currentIndex: 0,
			isModalEnabled: false
		},
		computed: {
			// Used to turn 'screenshotCount: 5' into a thing we can loop over.
			screenshotIndexes: function(){
				var currentIndex = this.get('currentIndex')
				var size = this.get(`works.${currentIndex}.screenshotCount`)
        return new Array(size);
    	}           
		},
		oncomplete: function(){

			var worksRactive = this;

			var body = select('body'),
				slider = select('.js_slider'),
				workElements = selectAll('.js_slide'),
				closeElement = select('.close'),
				modalParent = select('.modal-parent');

			// Set up slider
			// 'rewind' option is not used per https://github.com/meandmax/lory/issues/197
			lory(slider);

			// Set up showing work detail after sliding
			slider.addEventListener('after.lory.slide', function(event){
				var currentSlide = event.detail.currentSlide
				log(`After slide! currentSlide is ${currentSlide}`)
				worksRactive.set('currentIndex', currentSlide)	
			});

			var enableModal = function(work){
				worksRactive.set('isModalEnabled', true)	

				// Masonry
				var elem = document.querySelector('.screenshots');
				var masonry = new Masonry( elem, {
					itemSelector: '.tile',
					columnWidth: 200
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
	});

}

export default showPortfolio 
