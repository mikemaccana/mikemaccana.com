var log = console.log.bind(console);

var showPortfolio = require("portfolio"),
	drawMongogram = require("monogram")

var query = document.querySelector.bind(document),
	queryAll = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;

var menuToggledElements = queryAll('nav, body, .hamburger, .content, footer');

// Clicking ☰ button displays nav
query('.hamburger').addEventListener('click', function(event) {
	menuToggledElements.forEach(function(element, index){
		element.classList.toggle('menu-active');
	});
	event.preventDefault();
});

// Portfolio page stuff
if ( window.location.pathname === '/' ) {
	showPortfolio();
}

drawMongogram();
