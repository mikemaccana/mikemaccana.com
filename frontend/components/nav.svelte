<script>
  import Hamburger from "./hamburger.svelte";
  import { onMount } from "svelte";

  var isMenuActive = false;

  onMount(function() {
    var log = console.log.bind(console),
      select = document.querySelector.bind(document),
      selectAll = document.querySelectorAll.bind(document);

    // Clicking ☰ button displays nav
    select(".hamburger").addEventListener("click", function(event) {
      isMenuActive = !isMenuActive;
      event.preventDefault();
    });
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");

  .wedge {
    transform: rotate(-4deg) translateX(800px);
    top: -26px;
    background-color: #212121ed;
    position: absolute;
    right: 0;
    height: 120%;
    width: 400px;
    z-index: 1;
  }

  .wedge.menu-active {
    transform: rotate(-4deg) translateX(231px);
  }

  nav {
    font-size: calc(var(--spacing) / 2);
    cursor: pointer;
    font-weight: 400;
    line-height: var(--vertical-rhythm);
    text-transform: uppercase;
    background-color: transparent;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow-y: auto;
    text-align: right;
    transform: translateX(400px);
    width: var(--sidebar-width);
  }

  nav.menu-active {
    transform: translateX(0);
  }

  nav.menu-active a {
    color: whiteSmoke;
  }

  a,
  a:hover,
  a:active,
  a:visited {
    color: transparent;
    text-decoration: none;
    width: 100%;
    display: block;
    padding: var(--spacing);
    transition: all 0.2s ease-out;
  }
  a:hover {
    color: var(--textcolor);
    transform: translateX(5px);
  }
  .linkedin-tracker {
    display: none;
  }
</style>

<Hamburger bind:isMenuActive />

<div class="wedge {isMenuActive ? 'menu-active' : ''}" />
<nav class="vertical {isMenuActive ? 'menu-active' : ''}">
  <a class="navitem" href="/">Work</a>
  <a class="navitem" href="/about">About</a>
  <a class="navitem" target="_blank" href="https://twitter.com/mikemaccana">
    Twitter
  </a>
  <a class="navitem" target="_blank" href="http://github.com/mikemaccana">
    GitHub
  </a>
  <a class="navitem" target="_blank" href="https://speakerdeck.com/mikemaccana">
    Speaker Deck
  </a>
  <a
    class="navitem"
    target="_blank"
    href="http://stackoverflow.com/users/123671/mikemaccana">
    Top 0.28% StackOverflow
  </a>
  <a
    class="navitem"
    target="_blank"
    href="https://www.linkedin.com/in/mikemaccana">
    LinkedIn
  </a>
  <img
    class="linkedin-tracker"
    src="https://www.linkedin.com/profile/view?authToken=zRgB&authType=name&id=13692926"
    alt="Not provided" />
</nav>
