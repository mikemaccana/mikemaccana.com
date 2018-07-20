import Snap from "./thirdparty/snap.svg.js";
var select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document),
	log = console.log.bind(console);


var drawMonogram = function(){
	log('Drawing monogram')
	return new Promise(function(resolve, reject){
		var monogram = Snap.select(".monogram"),
		bigM = monogram.select('#big-m'),
		smallM = monogram.select('#small-m'),
		content = select('.content'),
		title = select('.intro h1'),
		sub = select('.intro h2');

		// See http://raphaeljs.com/reference.html#Element.transform for transform syntax
		bigM.animate({
			transform: "T70,0",
			opacity: 1,
			fill: 'whiteSmoke'
		}, 1000, mina.easeout)
		smallM.animate({
			transform: "T0,70",
			opacity: 1,
			fill: 'white'
		}, 1500, mina.easeout)

		setTimeout(function(){
			title.classList.toggle('visible');
		}, 750)

		setTimeout(function(){
			sub.classList.toggle('visible');
		}, 1000)

		setTimeout(function(){
			content.classList.remove('loading');
		}, 1500)

		setTimeout(function(){
			resolve()
		}, 2000)
	})
}

export default drawMonogram
