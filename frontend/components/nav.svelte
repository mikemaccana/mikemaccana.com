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
    width: 512px;
    z-index: 1;
  }

  .wedge.menu-active {
    transform: rotate(-4deg) translateX(188px);
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
    overflow-y: auto;
    text-align: right;
    transform: translateX(400px);
    width: 308px;
  }

  nav.menu-active {
    transform: translateX(0);
  }

  nav.menu-active a {
    color: whiteSmoke;
  }

  a.navitem img {
    height: 24px;
    margin-right: 6px;
  }

  a,
  a:hover,
  a:active,
  a:visited {
    font-family: "Caslon";
    line-height: 36px;
    font-size: 32px;
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

  a.navitem.stackoverflow {
    padding-right: 43px;
    position: relative;
  }

  .bragging {
    font-family: "Open Sans", "Segoe UI", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    padding: 3px 6px;
    position: absolute;
    top: 58px;
    text-transform: uppercase;
    color: #0078d4;
    background-color: white;
    right: 38px;
  }

  a.navitem.speakerdeck {
    padding-right: 43px;
  }

  a.navitem.linkedin {
    padding-right: 80px;
  }

  a.navitem.twitter {
    padding-right: 88px;
  }

  a.navitem.github {
    padding-right: 70px;
  }

  a.navitem.blog {
    padding-right: 94px;
  }

  a.navitem.work {
    padding-right: 63px;
  }
</style>

<Hamburger bind:isMenuActive />

<div class="wedge {isMenuActive ? 'menu-active' : ''}" />
<nav class="vertical {isMenuActive ? 'menu-active' : ''}">

  <a
    class="navitem stackoverflow"
    target="_blank"
    href="http://stackoverflow.com/users/123671/mikemaccana">
    <img alt="" src="/images/icons/stack-overflow.svg" />
    StackOverflow
    <div class="bragging">Top 0.28%</div>
  </a>

  <a
    class="navitem speakerdeck"
    target="_blank"
    href="https://speakerdeck.com/mikemaccana">
    <img alt="" src="/images/icons/speaker-deck.svg" />
    Speaker Deck
  </a>

  <a
    class="navitem linkedin"
    target="_blank"
    href="https://www.linkedin.com/in/mikemaccana">
    <img alt="" src="/images/icons/linkedin.svg" />
    LinkedIn
  </a>

  <a
    class="navitem twitter"
    target="_blank"
    href="https://twitter.com/mikemaccana">
    <img alt="" src="/images/icons/twitter.svg" />
    Twitter
  </a>

  <a
    class="navitem github"
    target="_blank"
    href="http://github.com/mikemaccana">
    <img alt="" src="/images/icons/github.svg" />
    GitHub
  </a>

  <a class="navitem blog" target="_blank" href="https://expeditedssl.com/blog">
    <img alt="" src="/images/icons/blog.svg" />
    Blog
  </a>

  <a class="navitem work" href="/">
    <img alt="" src="/images/icons/work.svg" />
    Work
  </a>

  <img
    class="linkedin-tracker"
    src="https://www.linkedin.com/profile/view?authToken=zRgB&authType=name&id=13692926"
    alt="Not provided" />
</nav>
