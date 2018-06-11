import * as ractive from "/js/thirdparty/ractive.js";
import ImagesLoaded from "/js/thirdparty/imagesloaded.pkgd.js";
import * as agave from  "/js/thirdparty/agave.js";
import {lory} from '/js/thirdparty/lory/lory.js';

import worksTemplate from "/js/templates/works.js";
import workDescriptionTemplate from "/js/templates/workdescription.js";
import modalTemplate from "/js/templates/modal.js";

import worksData from "/js/data/works.js";

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
	
	var workDescriptionRactive = new Ractive({
		el: '.work-description',
		template: workDescriptionTemplate,
		data: {
			title: null,
			logo: null,
			lede: null
		}
	})

	var modalRactive = new Ractive({
		el: '.modal .text',
		template: modalTemplate,
		data: {
			title: null,
			message: null
		}
	})

	var worksRactive = new Ractive({
		el: '.works-container',
		template: worksTemplate,
		data: worksData,
		oncomplete: function(){

			var slider = select('.js_slider'),
				works = selectAll('.work');

			log(`portfolio ractive setup, slider is`, slider)

			// Set up slider
			lory(slider, {
				rewind: true
			});
			
			// Set up showing work detail after sliding
			slider.addEventListener('after.lory.slide', function(event){
				var currentSlide = event.detail.currentSlide
				log(`After slide! currentSlide is ${currentSlide}`)

				var workData = worksData.works[currentSlide]
				workDescriptionRactive.set({
					title: workData.title,
					logo: `${workData.client}.${workData.imageExtension}`,
					lede: workData.lede
				})				
			});

			// Set up showing work detail when items are clicked
			works.forEach(function(work){

				work.addEventListener('click', function(event){
					log('Clicked yaay!')
					var thisWork = event.target
					log('thisWork', thisWork)
					var indexZero = thisWork.avgetParentIndex();
					enableModal(worksData.works[indexZero])
					// Make dialog show the work at this index
				})
			})

		}
	});

	var body = select('body'),
		worksAll = select('.works'),
		worksArea = select('.works-container'),
		workTitle = select('.work-title'),
		workClient = select('.work-client'),
		workLogo = select('.work-logo'),
		workLede = select('.work-lede'),
		modalParent = select('.modal-parent'),
		modalTitle = select('.modal-parent').querySelector('h1'),
		modalDescription = select('.modal-parent').querySelector('.description'),
		close = select('.close');

	var selected = 1;



	close.addEventListener('click', function(event){
		disableModal();
	})

	var enableModal = function(work){
		body.classList.toggle('modal-enabled');
		modalParent.style.display = 'inline';
		modalRactive.set({
		title: work.title,
		imageExtension: work.imageExtension,
		slug: work.slug,
		description: work.description,
		screenshots: new Array(work.screenshotCount)
		});
		ImagesLoaded('.screenshots img', function() {
			var screenshotsWidth = 0;
			selectAll('.screenshots .screenshot').forEach(function(image){
				screenshotsWidth += image.clientWidth + ( 2 * 1 ) + ( 2 * 6 )
				log('Added ', image.clientWidth + ( 2 * 1 ) + ( 2 * 6 ))
			});
			log('Setting screenshotsWidth to:', screenshotsWidth);
			select('.screenshots').style.width = screenshotsWidth+'px';
		});
	}

	var disableModal = function(){
		body.classList.toggle('modal-enabled');
		modalParent.style.display = 'none';
	};

	var changeWorkItem = function(index){
		log('selecting', index)
		var work = select('.work:nth-child('+index+')')
		log(work)
		work.classList.add('selected')
		var workData = worksData.works[(index - 1)]
		workDescriptionRactive.set({
			title: workData.title,
			logo: work.dataset.logo,
			lede: workData.lede
		})
	}

}

export default showPortfolio 
