<script>
  import Slider from "./slider.svelte";
  import Masonry from "../js/thirdparty/masonry/masonry.js";
  import "../js/utils/element-on.js";
  import "../js/utils/get-parent-index.js";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  export let works;
  export let currentIndex;
  export let isModalEnabled;

  var log = console.log.bind(console);

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

  /* Modify 'columnWidth' value in works.js if this is changed */
  :root {
    --masonry-base: 340px;
  }

  .work-description {
    display: grid;
    justify-items: center;
  }

  .work-description-content {
    background-color: var(--shadedgrey);
    max-width: 600px;
    padding: var(--spacing);
    text-align: left;
    grid-template-columns: 7fr 3fr;
  }

  .work-title {
    font-size: 26pt;
    margin: calc(var(--spacing) / 4) 0;
    grid-row: 1;
    grid-column: 1;
  }

  .work-logo {
    grid-row: 1;
    grid-column: 2;
    width: 100%;
  }

  .work-lede {
    grid-area: 2 1 3 2;
  }

  .work-title,
  .work-logo,
  .work-lede {
    float: left;
  }
</style>

<Slider {works} {currentIndex} />

<div class="work-description">
  <div class="work-description-content">
    <h3 class="work-title">{works[currentIndex].title}</h3>
    <img
      class="work-logo"
      src="/images/logos/{works[currentIndex].client}.png"
      alt="Not provided" />
    <div class="work-lede">{works[currentIndex].lede}</div>
  </div>
</div>
