<script>
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  export let title;
  export let subtitles;

  onMount(function() {
    setTimeout(function() {
      document.body.classList.remove("loading");
    }, 0);
  });
</script>

<style>
  header {
    padding: 0 24px;
    align-content: center;
    text-align: left;
    grid-column: 1;
  }

  h1 {
    font-size: 44pt;
  }

  h1,
  h2 {
    margin: calc(var(--spacing) / 4) 0;
    transition: all 4s ease-out;
    color: var(--midgrey);
  }

  h2 {
    opacity: 1;
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (max-width: 850px) {
    header {
      margin-top: 24px;
    }

    h1 {
      font-size: 36px;
      line-height: 40px;
    }
    h2 {
      font-size: 24px;
      line-height: 28px;
    }
  }
</style>

<header>
  <h1>{title}</h1>
  {#each subtitles as subtitle}
    <h2>{subtitle}</h2>
  {/each}
</header>
