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


var ITEM_WIDTH = {
	selected: 400,
	margin: 6,
	unselected: 180
};

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
		work.addEventListener('mouseover', function(event){
			log('hover', event.target)
			unselect(selected);
			var thisWork = event.target
			log('thisWork', thisWork)
			selected = thisWork.avgetParentIndex() + 1;
			select(selected);
			log('hovered on ', selected)
		});

		work.addEventListener('click', function(event){
			log('Clicked yaay!')
			var thisWork = event.target
			log('thisWork', thisWork)
			var indexZero = thisWork.avgetParentIndex();
			enableModal(worksData.works[indexZero])
			// Make dialog show the work at this index
		})
	})

	var scroll = function(index){
		var itemFullWidth = ITEM_WIDTH.unselected + (ITEM_WIDTH.margin * 2)
		var amount = ( itemFullWidth * (index - 1) );
		worksArea.scrollLeft = amount;
	}

	worksArea.addEventListener('touchend', function(ev){
		var changedTouches = ev.changedTouches[0];
		var elem = document.elementFromPoint(changedTouches.pageX, changedTouches.pageY);
		var itemNumber = elem.avgetParentIndex()
		unselect(selected);
		selected = itemNumber;
		log('Selected element', itemNumber)
		select(itemNumber)
	});

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

	var unselect = function(index){
		var work = query('.work:nth-child('+index+')')
		if ( work ) {
			work.classList.remove('selected');
		} else {
			log('Could not find a work with index', index)
		}
	}

	// We need to pad first item is list, so it shows in center
	var padFirstWorkItem = function(){
		log('Adjusting padding');
		var worksOffset = Math.floor( (window.innerWidth / 2) - (ITEM_WIDTH.selected/2) ); // Keeps current item centered in window
		works[0].style['margin-left'] = worksOffset+'px';

		// Adjust width of .works for the amount of works we have
		var normalWorkItemWidth = 180 + 2 * 6;
		var normalItemsWidth = ( worksData.works.length - 1 ) * normalWorkItemWidth
		var selectedItemWidth = 400 + 2 * 6
		worksAll.style.width = normalItemsWidth + selectedItemWidth + worksOffset
		log('Works is now', normalItemsWidth + selectedItemWidth + worksOffset)
	}

	// Some people don't have mice that can scroll left and right
	// So make mousewheel up and down do it.
	var scrollingGoesLeftAndRight = function(){
		body.addEventListener("mousewheel", function(event){
			// Ignore horizontal movement (eg, magic mouse scrolling)
			if ( event.wheelDeltaY > 0 ) {
				if (body.doScroll) {
					// IE
					worksArea.doScroll(event.wheelDelta > 0 ? "left":"right");
				} else {
					if ((event.wheelDelta || event.detail) > 0) {
						log('A', event)

						worksArea.scrollLeft -= 10;
					}	else {
						log('B', event)
						worksArea.scrollLeft += 10;
					}
				}
				event.preventDefault();
			}
		});
	}

	// Re-run layout padding when window resizes, but wait until the user has stopped
	// resizing the window for 500ms first
	window.addEventListener("resize", padFirstWorkItem.avthrottle(500));
	padFirstWorkItem()
	scrollingGoesLeftAndRight();
	select(selected);
}

export default showPortfolio 
