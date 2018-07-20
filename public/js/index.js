import WorkViewer from "./work-viewer.svelte";
import Intro from "./heading.svelte";
import Nav from "./nav.svelte";
import areImagesLoaded from "./are-images-loaded.js"

var log = console.log.bind(console), 
	select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;

(async function(){
	var worksWrapper = select('.works-wrapper'),
		workDescription = select('.work-description');

	new Nav({
		target: select('.hamburger-navigation'),
	});
	
	const intro = new Intro({
		target: select('.intro'),
	});

	// Only used on /
	if ( window.location.pathname === '/' ) {
		new WorkViewer({
			target: document.querySelector('.works-wrapper'),
		});
	}

	await intro.drawMonogram();
	await areImagesLoaded('.works .work')

	document.body.classList.remove('loading');
	// Fade in each item individually
	selectAll('.works .work').forEach(function(element, index){
		setTimeout(function(){
			element.classList.toggle('visible');
		}, index * 300)
	})
	select('.work-description').classList.toggle('visible');

})()




export default app;


