<script>
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";
  console.log(`Hello from monogram.svelte`);

  let isActive = false;

  onMount(function() {
    log("Drawing monogram");

    setTimeout(function() {
      document.body.classList.remove("loading");
    }, 4000);

    isActive = true;
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");

  .monogram-and-heading {
    padding: 0 24px;
    text-align: center;
    grid-column: 1;
  }

  .tall-m {
    width: 30px;
    transform: translateY(60px);
  }

  .wide-m {
    width: 36px;
    transform: translateY(-60px);
  }

  .tall-m,
  .wide-m {
    justify-self: center;
    align-self: center;
    margin-top: calc(var(--spacing) / 4);
    opacity: 0;
    transition: all 2s ease-out;
    grid-column: 1;
    grid-row: 1;
  }

  .tall-m.active,
  .wide-m.active {
    opacity: 1;
    transform: translateY(0);
  }

  h1,
  h2 {
    margin: calc(var(--spacing) / 4) 0;

    transition: all 4s ease-out;
  }

  h2 {
    opacity: 0;
  }

  h2.active {
    opacity: 1;
  }

  h2 {
    font-size: 64px;
  }
</style>

<div class="monogram-and-heading">
  <img
    class="tall-m {isActive ? 'active' : ''}"
    alt="tall m"
    src="/images/monogram-tall-m.svg" />
  <img
    class="wide-m {isActive ? 'active' : ''}"
    alt="wide m"
    src="/images/monogram-wide-m.svg" />
  <h1 class={isActive ? 'active' : ''}>Mike MacCana</h1>
  <h2 class={isActive ? 'active' : ''}>I make software products</h2>
</div>
