<script>
  import Slider from "./slider.svelte";
  import Description from "./description.svelte";
  import Masonry from "../js/thirdparty/masonry/masonry.js";
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
      setTimeout(function() {
        // Masonry
        var masonryElement = document.querySelector(".screenshots");
        new Masonry(masonryElement, {
          itemSelector: ".tile",
          columnWidth: 340 / 2
        });
      }, NEXT_TICK);
    };

    var disableModal = function() {
      isModalEnabled = false;
    };

    // Set up showing work detail when items are clicked
    body.on("click", ".slide.selected img", function(event) {
      log(`Clicked active image!`);
      enableModal();
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

<Description bind:works bind:currentIndex />
