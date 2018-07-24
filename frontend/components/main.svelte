<Nav/>

<div class="content">

	<Monogram/>

	<WorkViewer/>

</div>


<script>
	import WorkViewer from "work-viewer.svelte";
	import Monogram from "monogram.svelte";
	import Nav from "nav.svelte";
	import "../thirdparty/basics.js";


(async function(){
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




	// Fade in each item individually
	selectAll('.works .work').forEach(function(element, index){
		setTimeout(function(){
			element.classList.toggle('visible');
		}, index * 300)
	})
	select('.work-description').classList.toggle('visible');

})()

export default app;
</script>







