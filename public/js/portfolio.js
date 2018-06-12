import * as ractive from "/js/thirdparty/ractive.js";
import ImagesLoaded from "/js/thirdparty/imagesloaded.pkgd.js";
import * as agave from  "/js/thirdparty/agave.js";
import {lory} from '/js/thirdparty/lory/lory.js';
import * as masonry from '/js/thirdparty/masonry/masonry.js';

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

const showPortfolio = function(){

	var worksRactive = new Ractive({
		el: '.works-container',
		template: worksTemplate,
		data: {
			works,
			currentIndex: 0
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

			log(`portfolio ractive setup, slider is`, slider)

			// Set up slider
			lory(slider, {
				rewind: true
			});
			
			// Set up showing work detail after sliding
			slider.addEventListener('after.lory.slide', function(event){
				var currentSlide = event.detail.currentSlide
				log(`After slide! currentSlide is ${currentSlide}`)
				worksRactive.set('currentIndex', currentSlide)	
			});

			var enableModal = function(work){
				body.classList.toggle('modal-enabled');
				modalParent.style.display = 'inline';
			}
		
			var disableModal = function(){
				body.classList.toggle('modal-enabled');
				modalParent.style.display = 'none';
			};

			// Set up showing work detail when items are clicked
			workElements.forEach(function(workElement){
				workElement.addEventListener('click', function(event){			
					var clickedWorkIndex = event.target.avgetParentIndex();
					log(`Clicked work element! ${clickedWorkIndex}`)
					enableModal(works[clickedWorkIndex])
					// Make dialog show the work at this index
				})
			})

			closeElement.addEventListener('click', function(event){
				disableModal();
			})

		}
	});

}

export default showPortfolio 
