<script>
  import Hamburger from "./hamburger.svelte";
  import { onMount } from "svelte";
  import { Link } from "yrv";
  export let isMenuActive;

  const STATIC_DIR = "/_static";

  onMount(function () {
    var log = console.log.bind(console),
      select = document.querySelector.bind(document),
      selectAll = document.querySelectorAll.bind(document);

    // Clicking ☰ button displays nav
    select(".hamburger").addEventListener("click", function (event) {
      isMenuActive = !isMenuActive;
      event.preventDefault();
    });
  });
</script>

<style>
  /* The wedge, because it's rotated, goes out of bounds, and makes scrollbars appear. .wedge-restrictor element stops that. */
  .wedge-restrictor {
    top: 0;
    right: 0;
    position: absolute;
    height: -webkit-fill-available;
    width: 512px;
    overflow: hidden;
  }
  .wedge {
    transform: rotate(-4deg) translateX(800px);
    top: -26px;
    background-color: #212121ed;
    z-index: 2;
    position: fixed;
    right: 0;
    height: 120%;
    width: 512px;
    z-index: 1;
    opacity: 0;
    transition: all 0.5s;
    backdrop-filter: blur(20px);
  }

  .wedge.menu-active {
    transform: rotate(-4deg) translateX(188px);
    opacity: 1;
  }

  nav {
    font-size: calc(var(--spacing) / 2);
    cursor: pointer;
    font-weight: 400;
    line-height: var(--vertical-rhythm);
    background-color: transparent;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    text-align: right;
    transform: translateX(400px);
    width: 308px;
    overflow: hidden;
  }

  nav.menu-active {
    transform: translateX(0);
  }

  /* Globals because the 'Link' elements don't have the component-specific styles applied */
  :global(nav a.navitem img) {
    height: 24px;
  }

  :global(nav a, nav a:hover, nav a:active, nav a:visited) {
    font-family: "Caslon";
    line-height: 36px;
    font-size: 32px;
    text-decoration: none;
    width: 100%;
    color: whiteSmoke;
    padding: var(--spacing);
    transition: all 0.2s ease-out;
    justify-content: right;
    grid-auto-flow: column;
    display: grid;
    position: relative;
    align-content: center;
    grid-gap: 12px;
  }
  :global(nav a:hover) {
    color: var(--textcolor);
    transform: translateX(5px);
  }

  a.navitem.stackoverflow {
    padding-right: 43px;
    overflow: visible;
  }

  .bragging {
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    padding: 3px 6px;
    position: absolute;
    top: 82px;
    right: 38px;
  }

  a.navitem.speakerdeck {
    padding-right: 38px;
  }

  a.navitem.linkedin {
    padding-right: 90px;
  }

  a.navitem.twitter {
    padding-right: 106px;
  }

  a.navitem.github {
    padding-right: 91px;
  }

  :global(nav a.navitem.blog) {
    padding-right: 124px;
  }

  a.navitem.work {
    padding-right: 102px;
  }

  a.navitem.cv {
    padding-right: 121px;
  }
</style>

<Hamburger bind:isMenuActive />

<div class="wedge-restrictor">
  <div class="wedge {isMenuActive ? 'menu-active' : ''}" />
</div>
<nav class="vertical {isMenuActive ? 'menu-active' : ''}">
  <a
    class="navitem stackoverflow"
    target="_blank"
    href="http://stackoverflow.com/users/123671/mikemaccana">
    <img alt="" src="{STATIC_DIR}/images/icons/stack-overflow.svg" />
    StackOverflow
    <div class="bragging">Top 0.14%</div>
  </a>

  <a
    class="navitem speakerdeck"
    target="_blank"
    href="https://speakerdeck.com/mikemaccana">
    <img alt="" src="{STATIC_DIR}/images/icons/speaker-deck.svg" />
    Speaker Deck
  </a>

  <a
    class="navitem linkedin"
    target="_blank"
    href="https://www.linkedin.com/in/mikemaccana">
    <img alt="" src="{STATIC_DIR}/images/icons/linkedin.svg" />
    LinkedIn
  </a>

  <a
    class="navitem twitter"
    target="_blank"
    href="https://twitter.com/mikemaccana">
    <img alt="" src="{STATIC_DIR}/images/icons/twitter.svg" />
    Twitter
  </a>

  <a
    class="navitem github"
    target="_blank"
    href="https://github.com/mikemaccana">
    <img alt="" src="{STATIC_DIR}/images/icons/github.svg" />
    GitHub
    <div class="bragging">2020 Arctic Code Vault</div>
  </a>

  <Link class="navitem blog" target="_blank" href="/blog">
    <img alt="" src="{STATIC_DIR}/images/icons/blog.svg" />
    Blog
  </Link>

  <a class="navitem work" href="/">
    <img alt="" src="{STATIC_DIR}/images/icons/work.svg" />
    Work
  </a>

  <a
    class="navitem cv"
    download
    href="{STATIC_DIR}/downloads/{encodeURIComponent('Mike MacCana CV.pdf')}">
    <img alt="" src="{STATIC_DIR}/images/icons/cv.svg" />
    CV
  </a>
</nav>
