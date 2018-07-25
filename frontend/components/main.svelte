<Nav/>
<Monogram/>
<WorkViewer {works} {currentIndex} {isModalEnabled}/>
<Modal {works} {currentIndex} {isModalEnabled}/>

<script>
	import works from "../data/works.js";
	import WorkViewer from "./work-viewer.svelte";
	import Monogram from "./monogram-x.svelte";	
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

	log(`Hello from main.svelte, works are ${works}`)

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
			WorkViewer,
			Modal
		}
	}

</script>

<style>
	@import url("fonts.css");
	@import url("colors.css");
	@import url("metrics.css");
	@import url("basics.css");

	.about-me {
		margin: 0 auto;
		max-width: --single-column-threshold-width;
	}

</style>




