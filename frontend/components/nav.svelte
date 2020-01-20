<script>
  import Hamburger from "./hamburger.svelte";
  import { onMount } from "svelte";

  onMount(function() {
    var log = console.log.bind(console),
      select = document.querySelector.bind(document),
      selectAll = document.querySelectorAll.bind(document);

    var menuToggledElements = selectAll(
      "nav, body, .hamburger, .content, footer"
    );

    // Clicking ☰ button displays nav
    select(".hamburger").addEventListener("click", function(event) {
      menuToggledElements.forEach(function(element, index) {
        element.classList.toggle("menu-active");
      });
      event.preventDefault();
    });
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");
  nav {
    font-size: calc(var(--spacing) / 2);
    cursor: pointer;
    font-weight: 400;
    line-height: var(--vertical-rhythm);
    text-transform: uppercase;
    background-color: red;
    margin-right: var(--sidebar-width);
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow-y: auto;
  }

  .menu-active {
    transform: translateX(0);
    width: var(--sidebar-width);
    right: var(--sidebar-width);
  }
  a,
  a:hover,
  a:active,
  a:visited {
    color: whiteSmoke;
    text-decoration: none;
    width: 100%;
    display: block;
    padding: var(--spacing);
    border-bottom: 1px solid --midgrey;
  }
  a:hover {
    color: var(--textcolor);
    transition: all 0.2s ease-out;
    transform: translateX(5px);
  }
  .linkedin-tracker {
    display: none;
  }
</style>

<Hamburger />

<nav class="vertical">
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
  <a class="navitem" target="_blank" href="https://medium.com/@mikemaccana">
    Medium
  </a>
  <a
    class="navitem"
    target="_blank"
    href="http://stackoverflow.com/users/123671/mikemaccana">
    StackOverflow
  </a>
  <a class="navitem" target="_blank" href="https://soundcloud.com/mikemaccana">
    SoundCloud
  </a>
  <a class="navitem" target="_blank" href="http://instagram.com/mikemaccana">
    Instagram
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
