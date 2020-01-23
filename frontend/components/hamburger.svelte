<script>
  export let isMenuActive;
</script>

<style>
  /* ☰ button */
  .hamburger {
    cursor: pointer;
    z-index: 1;
    top: 0;
    background-color: transparent;
    padding: 1em;
    position: fixed;
    right: 0;
    display: block;
    z-index: 2;
  }
  .menu-active {
    right: var(--sidebar-width);
  }
  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    transition: all 0.5s;
    display: block;
    height: 1px;
    width: var(--spacing);
    background: #fff;
    margin: 4px auto;
  }

  /* 360 + 45 = 405 */
  .menu-active .hamburger-top {
    transform: rotate(405deg) translate(4px, 4px);
  }

  .menu-active .hamburger-middle {
    opacity: 0;
  }

  /* 360 + 45 = 405 */
  .menu-active .hamburger-bottom {
    transform: rotate(-405deg) translate(4.5px, -4.5px);
  }
</style>

<div class="hamburger {isMenuActive ? 'menu-active' : ''}">
  <span class="hamburger-top" />
  <span class="hamburger-middle" />
  <span class="hamburger-bottom" />
</div>
