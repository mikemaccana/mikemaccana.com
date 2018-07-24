<div class="hamburger">
	<span class="hamburger-top"></span>
	<span class="hamburger-middle"></span>
	<span class="hamburger-bottom"></span>
</div>

<script>
	export default {}
</script>

<style>

	/* ☰ button */
	.hamburger {
		cursor: pointer;
		z-index: 1;
		top: 0;
		background-color: black;
		padding: 1em;
		position: fixed;
		right: 0;
		display: block;
	}
	.menu-active {
		right: --sidebar-width;
	}
	.hamburger-top, .hamburger-middle, .hamburger-bottom {
		transition: all .5s;
		display: block;
		height: 1px;
		width: --spacing;
		background: #fff;
		margin: 4px auto;
	}

	/* 360 + 45 = 405 */
	.menu-active .hamburger-top {
		transform: rotate(405deg) translate(4px,4px);
	}

	.menu-active .hamburger-middle {
		opacity: 0;
	}

	 /* 360 + 45 = 405 */
	.menu-active .hamburger-bottom {
		transform: rotate(-405deg) translate(4.5px,-4.5px);
	}
</style>
