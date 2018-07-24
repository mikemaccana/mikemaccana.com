window.log = console.log.bind(console), 
	window.select = document.querySelector.bind(document),
	window.selectAll = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;