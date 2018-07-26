
<div class="modal-shade" style="display: { modalDisplay };">
	<div class="modal">
		<div class="text">			
			<h1>{ works[currentIndex].title }</h1>
			<div class="screenshot-container">
				<div class="screenshots">					
					<div class="tile description">{@html works[currentIndex].description }</div>
					{#each new Array(works[currentIndex].screenshotCount) as unused, screenshotIndex}
						<img class="tile" src={ getImageFileName(works[currentIndex], screenshotIndex) } alt="Not provided"/>
					{/each}						
				</div>
			</div>
		</div>
		<img class="close" src="/images/icons/close.png" alt="Not provided"/>
	</div>
</div>

<script>
	export default {
		helpers: {
			getImageFileName: function(currentWork, screenshotIndex){
				return `/images/work/screenshots/${ currentWork.slug }-${screenshotIndex}.${ currentWork.imageExtension }`
			}
		},
		computed: {
			modalDisplay: ({isModalEnabled}) => {
				if ( isModalEnabled ) {
					return "grid"
				}
				return "none"
			}
		}
	}
</script>

<style>
	:root{
		--modal-height: 500px;
	}

	.modal-shade {
		display: grid;
		width: 100%;
		position: absolute;
		height: 100%;
		top: 0;
		bottom: 0;
		background-color: var(--shadedgrey);
		z-index: 2; 
		align-content: center;
	}

	.modal {
		z-index: 3;
		grid-row: 1;		
		background-color: black;		
		height: var(--modal-height);
		opacity: 1;		
		position: relative;
	}

	.text {
		padding: var(--spacing);
		width: var(--single-column-threshold-width);
		max-width: 100%;
		color: whitesmoke;
		margin: 0 auto;
	}	
		
	.screenshot-container {
		max-width: 100%;	
	}

	.screenshots * {
		padding: 12px; 
	}	

	.tile {
		width: calc(var(--masonry-base) / 2);
	}

	.tile:first-of-type {
		width: var(--masonry-base);
	}
	.tile.description {
		width: var(--masonry-base);
		font-size: 12pt;
	}

	button {
		border: 1px solid whiteSmoke;
	}

	h1 {
		margin: 0 0 var(--spacing) 0;
	}
	
	.close {
		cursor: pointer;
		position: absolute;
		right: var(--spacing);
		top: var(--spacing);
	}

	/* @media screen and (max-width: var(--small-desktop-threshold-width)) {
		.modal-shade {
			overflow-y: scroll;	
		}

		.modal {
			height: 100%;
			align-content: stretch;
		}

		.modal .text {
			width: 100%;
			padding: 12px;
			
		}

		.modal .text h1 {
			margin: 0 24px 0 0;
		}

		.screenshot-container .screenshots > * {
			padding: 2px;
		}
	} */

</style>
