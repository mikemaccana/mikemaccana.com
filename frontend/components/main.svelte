<Nav/>
<Monogram/>
<!-- <WorkViewer {works} {currentIndex} {isModalEnabled}/> -->
<Modal {works} {currentIndex} {isModalEnabled}/>

<script>
	import works from "../data/works.js";
	// import WorkViewer from "./work-viewer.svelte";
	import Monogram from "./monogram.svelte";	
	import Modal from './modal.svelte';
	import Nav from "./nav.svelte";
	import { select, selectAll, log } from "../js/utils/basics.js";

	var worksWrapper = select('.works-wrapper'),
		workDescription = select('.work-description');

	// // Only used on /
	// if ( window.location.pathname === '/' ) {
	// 	new WorkViewer({
	// 		target: document.querySelector('.works-wrapper'),
	// 	});
	// }

	log(`Hello from main.svelte`)

	// this promise never resolves
	// 	await areImagesLoaded('.works .work')
	// log(`images loaded`)

	export default {
		data: function(){
			return {
				works,
				currentIndex: 0,
				isModalEnabled: false
			}
		},	
		components: {
			Nav,
			Monogram,
			// WorkViewer,
			Modal
		}
	}

</script>

<style>
	@import url("fonts.css");
	@import url("colors.css");
	@import url("metrics.css");

	*, *:before, *:after {
		box-sizing: border-box;
		/* Everything has layout by default. No clear fixes. */
		overflow: hidden;  
	}

	a, a:hover, a:active, a:visited {
		color: --textcolor;
		text-decoration: none;
	}

	body, nav, .hamburger, .content, .symbol {
		transition: all 0.4s ease-out;
	}

	strong {
		color: --othertextcolor;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 100;
		color: --textcolor;
	}

	body {
		left: 0;
		margin: 0;
		background-color: black;
		color: --textcolor;
		overflow-x: hidden;
		background-size: cover;
		background-image: url('/images/vanda.jpg');
		background-repeat: repeat;
		transform: all 2s ease-in-out;
		display: grid;
		height: 100%; 
		width: 100%;
	}

	body * {
		grid-column: 1;
	}

	.about-me {
		margin: 0 auto;
		max-width: --single-column-threshold-width;
	}

</style>




