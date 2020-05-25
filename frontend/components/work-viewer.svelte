<script>
  import Slider from "./slider.svelte";
  import "../js/utils/element-on.js";
  import "../js/utils/get-parent-index.js";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  export let works;
  export let currentIndex;
  export let isModalEnabled;

  const NEXT_TICK = 0;

  onMount(function() {
    var body = select("body"),
      closeElement = select(".close");

    var enableModal = function() {
      log(`starting modal`);
      isModalEnabled = true;
    };

    var disableModal = function() {
      isModalEnabled = false;
    };

    // Set up showing work detail when items are clicked
    body.addEventListener("click", function(event) {
      if (event.target.closest(".slide")) {
        log(`Clicked active image!`);
        enableModal();
      }
    });

    closeElement.addEventListener("click", function(event) {
      disableModal();
    });
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");
</style>

<Slider bind:works bind:currentIndex />
