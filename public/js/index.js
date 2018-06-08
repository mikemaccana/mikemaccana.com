import * as portfolio from '/js/portfolio.js';
import * as monogram from '/js/monogram.js';

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

// Portfolio page stuff
if ( window.location.pathname === '/' ) {
	portfolio.showPortfolio();
}

monogram.drawMonogram();
