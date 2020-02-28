<script>
  import { onMount } from "svelte";

  import debounce from "lodash.debounce";

  var log = console.log.bind(console);

  const LEFT_KEY = 37,
    RIGHT_KEY = 39;

  const PADDING = 12;

  // TODO: this number is done by eye. Work out what the actual width of a grid item is.
  const slideWidth = 400 + 6;

  export let works;
  export let currentIndex;

  var horizontalScrollOffset;

  $: isFirstSlide = currentIndex === 0;
  $: isLastSlide = currentIndex === works.length - 1;

  // Mobile Edge, Chrome etc will trigger spurious `resize` events on window when a user scrolls up and down.
  // So we only do window resize work when the width changes.
  var previousWidth = window.innerWidth;
  var isWindowWidthChange = function() {
    log(`Previouswidth is ${previousWidth}, new width is ${window.innerWidth}`);
    if (window.innerWidth !== previousWidth) {
      previousWidth = window.innerWidth;
      return true;
    }
    return false;
  };

  var setHorizontalScrollOffset = function() {
    var widthOfWindow = window.innerWidth;
    horizontalScrollOffset =
      // Halfway across screen
      widthOfWindow / 2 -
      // But then adjusted back left, half a grid item away (so center is in middle)
      slideWidth / 2 -
      // Then adjusted for X items across
      currentIndex * slideWidth;
  };

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

  onMount(function() {
    // When the window resizes go to slide 0
    var handleResize = debounce(function(event) {
      if (isWindowWidthChange()) {
        log(`width has changed`);
        currentIndex = 0;
        setHorizontalScrollOffset();
      } else {
        log(
          `Ignoring window height change (probably a mobiel device showing / removing UI)`
        );
      }
    }, 100);

    window.addEventListener("resize", handleResize);

    window.addEventListener("keyup", function(event) {
      if (event.keyCode === LEFT_KEY) {
        log(`Going back!`);
        changeSlide(false);
      }
      if (event.keyCode === RIGHT_KEY) {
        log(`Going forward!`);
        changeSlide(true);
      }
    });

    setHorizontalScrollOffset();

    // TODO: Fade in each item individually
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");
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

  .slide {
    grid-row: 1;

    /*Needs to be defined (or a width set individually on each) for slider buttons to work */
    width: 400px;

    /*Darken and zoom out till selected */
    opacity: 0.3;
    transition: all 0.1s ease-out;
    transform: scale(0.6);
    filter: blur(2px);
  }

  .slide.selected {
    opacity: 1;
    transform: scale(1);
    filter: none;
    cursor: pointer;
  }

  .slide img {
    /*Make images fit in container (they're retina) */
    width: 100%;
    /*Some images have transparent backgrounds */
    background-color: white;
    border-radius: var(--rounded-corners);
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
</style>

<div class="slider">
  <div class="frame">
    <div
      class="slides"
      style="transform: translateX({horizontalScrollOffset}px)">
      {#each works as work, index}
        <div
          class="slide {index === currentIndex ? 'selected' : ''}
          {index === 0 ? 'first' : ''}">
          <img
            src="/images/work/screenshots/{works[index].slug}-0.{works[index].imageExtension}"
            alt={works[index].slug}
            loading="lazy" />
        </div>
      {/each}
    </div>
  </div>

  {#if !isFirstSlide}
    <span
      class="previous"
      on:click={function() {
        log(`Clicked back!`);
        changeSlide(false);
      }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;">
        <rect
          id="Artboard1"
          x="0"
          y="0"
          width="30"
          height="30"
          style="fill:none;" />
        <path
          d="M20,2l-13,13c0,0 8.667,8.667 13,13"
          style="fill:none;stroke:#fff;stroke-width:1px;" />
      </svg>
    </span>
  {/if}
  {#if !isLastSlide}
    <span
      class="next"
      on:click={function() {
        log(`Clicked forward!`);
        changeSlide(true);
      }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;">
        <rect
          id="Artboard1"
          x="0"
          y="0"
          width="30"
          height="30"
          style="fill:none;" />
        <path
          d="M10,2l13,13c0,0 -8.667,8.667 -13,13"
          style="fill:none;stroke:#fff;stroke-width:1px;" />
      </svg>
    </span>
  {/if}
</div>
