// import App from '../templates/App.html';

import WorkViewerComponent from "./works.svelte";

import drawMonogram from './monogram.js';

import imagesLoaded from "./thirdparty/imagesloaded.pkgd.js";

var log = console.log.bind(console), 
	select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;

var menuToggledElements = selectAll('nav, body, .hamburger, .content, footer');

(async function(){
	var worksWrapper = select('.works-wrapper'),
		workDescription = select('.work-description');

	// Clicking ☰ button displays nav
	select('.hamburger').addEventListener('click', function(event) {
		menuToggledElements.forEach(function(element, index){
			element.classList.toggle('menu-active');
		});
		event.preventDefault();
	});

	await drawMonogram();

	imagesLoaded('.works .work', function(event) {
		document.body.classList.remove('loading');
		// Fade in each item individually
		selectAll('.works .work').forEach(function(element, index){
			setTimeout(function(){
				element.classList.toggle('visible');
			}, index * 300)
		})
		select('.work-description').classList.toggle('visible');
	})

	// const app = new App({
	// 	target: document.body,
	// 	data: {
	// 		name: 'world'
	// 	}
	// });

	// Portfolio page stuff
	if ( window.location.pathname === '/' ) {
		// Instantiate component
		const workViewerComponent = new WorkViewerComponent({
			target: document.querySelector('.works-wrapper'),
		});
	}
})()




export default app;


