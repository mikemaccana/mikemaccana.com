import * as ractive from "/js/thirdparty/ractive.js";
import ImagesLoaded from "/js/thirdparty/imagesloaded.pkgd.js";
import * as agave from  "/js/thirdparty/agave.js";

import worksTemplate from "/js/templates/works.js";
import workDescriptionTemplate from "/js/templates/workdescription.js";
import modalTemplate from "/js/templates/modal.js";

import worksData from "/js/data/works.js";

agave.enable('av');

var Ractive = ractive.Ractive

var query = document.querySelector.bind(document),
	queryAll = document.querySelectorAll.bind(document),
	log = console.log.bind(console);

// Return index of node under its parents. Eg, if you're the fourth child, return 3.
Element.prototype.avgetParentIndex = function() {
	return Array.prototype.indexOf.call(this.parentNode.children, this);
}

const showPortfolio = function(){
	var worksRactive = new Ractive({
		el: '.works-container',
		template: worksTemplate,
		data: worksData
	});

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

	var body = query('body'),
		works = queryAll('.work'),
		worksAll = query('.works'),
		worksArea = query('.works-container'),
		workTitle = query('.work-title'),
		workClient = query('.work-client'),
		workLogo = query('.work-logo'),
		workLede = query('.work-lede'),
		modalParent = query('.modal-parent'),
		modalTitle = query('.modal-parent').querySelector('h1'),
		modalDescription = query('.modal-parent').querySelector('.description'),
		close = query('.close');

	var selected = 1,
		max = worksData.works.length;

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
			queryAll('.screenshots .screenshot').forEach(function(image){
				screenshotsWidth += image.clientWidth + ( 2 * 1 ) + ( 2 * 6 )
				log('Added ', image.clientWidth + ( 2 * 1 ) + ( 2 * 6 ))
			});
			log('Setting screenshotsWidth to:', screenshotsWidth);
			query('.screenshots').style.width = screenshotsWidth+'px';
		});
	}

	var disableModal = function(){
		body.classList.toggle('modal-enabled');
		modalParent.style.display = 'none';
	};

	var select = function(index){
		log('selecting', index)
		var work = query('.work:nth-child('+index+')')
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
