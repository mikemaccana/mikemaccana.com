<script>
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  let isActive = false;

  onMount(function() {
    log("Drawing monogram");

    setTimeout(function() {
      document.body.classList.remove("loading");
    }, 0);

    isActive = true;
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");

  .monogram-and-heading {
    padding: 0 24px;
    justify-items: left;
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
    opacity: 0;
  }

  h2.active {
    opacity: 1;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (max-width: 850px) {
    .monogram-and-heading {
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

<div class="monogram-and-heading">

  <h1 class={isActive ? 'active' : ''}>Mike MacCana</h1>
  <h2 class={isActive ? 'active' : ''}>
    Front end, back end, cloud infrastructure.
    <br />
    Founding, bootstrapping, hiring, troubleshooting.
  </h2>
</div>
