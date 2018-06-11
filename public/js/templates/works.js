var worksTemplate = `
<div class="slider js_slider">
	<div class="frame js_frame">
		<div class="slides js_slides">
			{{#works:index}}
				<div class="js_slide {{ #if index === currentIndex }}selected{{ /if }} {{ #if index === 0 }}first{{ /if }}">
					<img src="/images/work/thumbs/{{{ previewImage }}}"/>
				</div>
			{{/works}}
		</div>
	</div>
	<span class="js_prev prev">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
	</span>
	<span class="js_next next">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
	</span>
</div>

<div class="work-description loading">
	<h3 class="work-title">{{ works[currentIndex].title }}</h3>
	<img class="work-logo" src="/images/logos/{{ works[currentIndex].client }}.{{ works[currentIndex].imageExtension }}"/>
	<div class="work-lede">{{ works[currentIndex].lede }}</div>
</div>

`

export default worksTemplate 

