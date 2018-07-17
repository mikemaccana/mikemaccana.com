import App from '../templates/App.html';
import drawMonogram from './monogram.js';
// import showPortfolio from './works.js';

var log = console.log.bind(console), 
	select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;

var menuToggledElements = selectAll('nav, body, .hamburger, .content, footer');

// Clicking ☰ button displays nav
select('.hamburger').addEventListener('click', function(event) {
	menuToggledElements.forEach(function(element, index){
		element.classList.toggle('menu-active');
	});
	event.preventDefault();
});

drawMonogram();

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

// Portfolio page stuff
// if ( window.location.pathname === '/' ) {
// 	showPortfolio();
// }


export default app;


