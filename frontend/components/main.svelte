<Nav/>
<Monogram/>
<WorkViewer/>
<Modal/>

<script>
	import WorkViewer from "work-viewer.svelte";
	import Monogram from "monogram.svelte";	
	import Modal from './Modal.svelte';
	import Nav from "nav.svelte";
	import "../thirdparty/basics.js";



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

</script>







