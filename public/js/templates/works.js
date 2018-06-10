var worksTemplate = `
<div class="slider js_slider">
	<div class="frame js_frame">
		<ul class="slides js_slides">
			{{#works}}
				<li class="js_slide" data-logo="/images/logos/{{{ client }}}.png">
					<img src="/images/work/thumbs/{{{ previewImage }}}"/>
				</li>
			{{/works}}
		</ul>
	</div>
	<span class="js_prev prev">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
	</span>
	<span class="js_next next">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
	</span>
</div>`


// /* <ul class="works">
//     <li class="work" data-logo="/images/logos/{{{ client }}}.png" style="background-image: url('/images/work/thumbs/{{{ previewImage }}}')">
//     </li>
// </ul>` */

export default worksTemplate 

