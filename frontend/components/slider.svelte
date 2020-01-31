<script>
  import { onMount } from "svelte";
  const LEFT = 37,
    RIGHT = 39;

  const PADDING = 12;

  const slideWidth = 400 + PADDING + PADDING;

  export let works;
  export let currentIndex;

  var horizontalScrollOffset;

  $: isFirstSlide = currentIndex === 0;
  $: isLastSlide = currentIndex === works.length - 1;

  var log = console.log.bind(console);

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
    window.addEventListener("resize", function(event) {
      currentIndex = 0;
      setHorizontalScrollOffset();
    });

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
            alt="Not provided" />
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
    <span
      class="next"
      on:click={function() {
        log(`Clicked forward!`);
        changeSlide(true);
      }}>
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
