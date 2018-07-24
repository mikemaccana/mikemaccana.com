<Nav/>
<Monogram/>
<WorkViewer/>
<Modal/>

<script>
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



	log(`done drawing`)
	// this promise never resolves
	// 	await areImagesLoaded('.works .work')
	log(`images loaded`)

	export default {
		components: {
			Nav,
			Monogram,
			WorkViewer,
			Modal
		}
	}

</script>







