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
    top: 8px;
    right: 293px;
  }
  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    transition: all 0.5s;
    display: block;
    height: 2px;
    width: 40px;
    background: var(--midgrey);
    margin: 8px auto;
  }

  .menu-active .hamburger-top,
  .menu-active .hamburger-middle,
  .menu-active .hamburger-bottom {
    background: white;
  }

  /* 360 + 45 = 405 */
  .menu-active .hamburger-top {
    transform: rotate(405deg) translate(10px, -4px);
  }

  .menu-active .hamburger-middle {
    opacity: 0;
  }

  /* 360 + 45 = 405 */
  .menu-active .hamburger-bottom {
    transform: rotate(-405deg) translate(18px, -4px);
  }
</style>

<div class="hamburger {isMenuActive ? 'menu-active' : ''}">
  <span class="hamburger-top" />
  <span class="hamburger-middle" />
  <span class="hamburger-bottom" />
</div>
