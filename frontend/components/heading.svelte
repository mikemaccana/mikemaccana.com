<svg class="monogram" width="401px" height="769px" viewBox="0 0 401 769" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	<defs></defs>
	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
		<g id="monogram" sketch:type="MSLayerGroup" fill="#222222">
			<g id="big-m" transform="translate(67.000000, 209.000000)" sketch:type="MSShapeGroup">
				<path d="M0,0 L0,544 L12,560 L12,28 L125,131 L81,175 L132.710938,223 L132.710938,207 L97,175 L132.710938,140 L132.710938,123 L0,0 Z" id="left"></path>
				<path d="M133.644531,0 L133.644531,544 L145.644531,560 L145.644531,28 L256.644531,132 L214.644531,175 L266.355469,223 L266.355469,207 L230.644531,175 L266.355469,140 L266.355469,123 L133.644531,0 Z" id="right" transform="translate(200.000000, 280.000000) scale(-1, 1) translate(-200.000000, -280.000000) "></path>
			</g>
			<g id="small-m" sketch:type="MSShapeGroup">
				<path d="M0,1 L0,402 L12,417 L12,29 L201,217 L201,201 L0,1 Z" id="left"></path>
				<path d="M200,0 L200,401 L212,416 L212,28 L401,216 L401,200 L200,0 Z" id="right" transform="translate(300.500000, 208.000000) scale(-1, 1) translate(-300.500000, -208.000000) "></path>
			</g>
		</g>
	</g>
</svg>
<h1>Mike MacCana</h1>
<h2>I make technology products</h2>

<script>
	import Snap from "./thirdparty/snap.svg.js";
	var select = document.querySelector.bind(document),
		selectAll = document.querySelectorAll.bind(document),
		log = console.log.bind(console);

	export default {
		methods: {
			drawMonogram: function(){
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
		}
	}

</script>
