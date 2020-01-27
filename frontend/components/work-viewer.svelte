<script>
  import Masonry from "../js/thirdparty/masonry/masonry.js";
  import "../js/utils/element-on.js";
  import "../js/utils/get-parent-index.js";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  export let works;
  export let currentIndex;
  export let isModalEnabled;

  const LEFT = 37,
    RIGHT = 39;

  const NEXT_TICK = 0;

  const slideWidth = 400 + 12 + 12;

  var horizontalScrollOffset;

  $: isFirstSlide = currentIndex === 0;
  $: isLastSlide = currentIndex === works.length - 1;

  var setHorizontalScrollOffset = function() {
    var widthOfWindow = window.innerWidth;
    horizontalScrollOffset =
      // Halfway across screen
      widthOfWindow / 2 -
      // But then adjusted back left, half a grid item away (so center is in middle)
      slideWidth / 2 -
      // Then adjusted if we've selected a new item
      currentIndex * slideWidth;
    log(`horizontalScrollOffset is ${horizontalScrollOffset}`);
  };

  onMount(function() {
    var body = select("body"),
      closeElement = select(".close");

    var log = console.log.bind(console);

    // When the window resizes go to slide 0
    window.addEventListener("resize", function(event) {
      currentIndex = 0;
      setHorizontalScrollOffset();
    });

    var changeSlide = function(isForward) {
      var adjustment = isForward ? 1 : -1;
      if (isFirstSlide) {
        if (!isForward) {
          log(`Refusing to scroll past first item`);
          return;
        }
      }
      if (isLastSlide) {
        if (isForward) {
          log(`Refusing to scroll past last item`);
          return;
        }
      }
      currentIndex = currentIndex + adjustment;
      setHorizontalScrollOffset();
      log(`currentIndex is now ${currentIndex}`);
    };

    window.addEventListener("keyup", function(event) {
      if (event.keyCode === LEFT) {
        log(`Going back!`);
        changeSlide(false);
      }
      if (event.keyCode === RIGHT) {
        log(`Going forward!`);
        changeSlide(true);
      }
    });

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
    body.on("click", ".js_slide.selected img", function(event) {
      log(`Clicked active image!`);
      enableModal();
    });

    closeElement.addEventListener("click", function(event) {
      disableModal();
    });

    setHorizontalScrollOffset();

    // Fade in each item individually
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");

  /* Modify 'columnWidth' value in works.js if this is changed */
  :root {
    --masonry-base: 340px;
  }

  .slider {
    /* Needed for previous and next buttons to be vertically centered correctly */
    position: relative;
  }

  .slides {
    display: grid;
    align-items: center;

    /* Required - removing this causes the slides area to be cut off */
    width: 9752px;
    justify-items: center;

    transition-timing-function: ease;
    transition-duration: 600ms;
  }

  .js_slide {
    grid-row: 1;

    /*Needs to be defined (or a width set individually on each) for slider buttons to work */
    width: 400px;

    /*Darken and zoom out till selected */
    opacity: 0.3;
    transition: all 0.1s ease-out;
    transform: scale(0.6);
    filter: blur(2px);
  }

  .js_slide.selected {
    opacity: 1;
    transform: scale(1);
    filter: none;
    cursor: pointer;
  }

  .js_slide img {
    /*Make images fit in container (they're retina) */
    width: 100%;
    /*Some images have transparent backgrounds */
    background-color: white;
  }

  .previous,
  .next {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    display: block;
    cursor: pointer;
  }

  .previous svg,
  .next svg {
    width: 50px;
  }

  .next {
    right: 0;
  }

  .previous {
    left: 0;
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

<div class="slider">
  <div class="frame">
    <div
      class="slides"
      style="transform: translateX({horizontalScrollOffset}px)">
      {#each works as work, index}
        <div
          class="js_slide {index === currentIndex ? 'selected' : ''}
          {index === 0 ? 'first' : ''}">
          <img
            src="/images/work/screenshots/{works[index].slug}-0.{works[index].imageExtension}"
            alt="Not provided" />
        </div>
      {/each}
    </div>
  </div>

  {#if !isFirstSlide}
    <span class="js_prev previous">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 501.5 501.5">
        <g>
          <path
            fill="#CCC"
            d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77
            55.506L143.56 250.75z" />
        </g>
      </svg>
    </span>
  {/if}
  {#if !isLastSlide}
    <span class="js_next next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 501.5 501.5">
        <g>
          <path
            fill="#CCC"
            d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56
            146.384l55.77-55.507L358.44 250.75z" />
        </g>
      </svg>
    </span>
  {/if}
</div>

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
