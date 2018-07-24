<Nav/>
<Monogram/>
<WorkViewer {works} {currentIndex} {isModalEnabled}/>
<Modal {works} {currentIndex} {isModalEnabled}/>

<script>
	import works from "../data/works.js";
	import WorkViewer from "./work-viewer.svelte";
	import Monogram from "./monogram.svelte";	
	import Modal from './modal.svelte';
	import Nav from "./nav.svelte";
	import "../js/utils/basics.js";



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
			WorkViewer,
			Modal
		}
	}

</script>







