<script>
  import "../js/utils/element-on.js";
  import "../js/utils/get-parent-index.js";
  import { select, selectAll, log } from "../ts/utils/basics.ts";
  import { onMount } from "svelte";
  // https://www.npmjs.com/package/tocca
  import "tocca";
  import { Link } from "yrv";

  import debounce from "lodash.debounce";

  export let works;
  export let currentIndex;

  const STATIC_DIR = "/_static";

  const LEFT_KEY = 37,
    RIGHT_KEY = 39;

  const PADDING = 12;

  const SLIDE_WIDTH = Math.min(800, window.innerWidth),
    SLIDE_HEIGHT = (SLIDE_WIDTH * 2) / 3;

  var horizontalScrollOffset;

  $: isFirstSlide = currentIndex === 0;
  $: isLastSlide = currentIndex === works.length - 1;

  // Mobile Edge, Chrome etc will trigger spurious `resize` events on window when a user scrolls up and down.
  // So we only do window resize work when the width changes.
  var previousWidth = window.innerWidth;
  var isWindowWidthChange = function () {
    log(`Previouswidth is ${previousWidth}, new width is ${window.innerWidth}`);
    if (window.innerWidth !== previousWidth) {
      previousWidth = window.innerWidth;
      return true;
    }
    return false;
  };

  var setHorizontalScrollOffset = function () {
    var widthOfWindow = window.innerWidth;
    horizontalScrollOffset =
      // Halfway across screen
      widthOfWindow / 2 -
      // But then adjusted back left, half a grid item away (so center is in middle)
      SLIDE_WIDTH / 2 -
      // Then adjusted for X items across
      currentIndex * SLIDE_WIDTH;
  };

  var changeSlide = function (isForward) {
    if (isForward) {
      log(`Going forward!`);
    } else {
      log(`Going backward!`);
    }
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

  onMount(function () {
    // When the window resizes go to slide 0
    var handleResize = debounce(function (event) {
      if (isWindowWidthChange()) {
        log(`width has changed`);
        currentIndex = 0;
        setHorizontalScrollOffset();
      } else {
        log(
          `Ignoring window height change (probably a mobile device showing / removing UI)`
        );
      }
    }, 100);

    window.addEventListener("resize", handleResize);

    window.addEventListener("keyup", function (event) {
      if (event.keyCode === RIGHT_KEY) {
        changeSlide(true);
      }
      if (event.keyCode === LEFT_KEY) {
        changeSlide(false);
      }
    });

    window.addEventListener("swipeleft", function (event) {
      changeSlide(true);
    });

    window.addEventListener("swiperight", function (event) {
      changeSlide(false);
    });

    setHorizontalScrollOffset();

    // TODO: Fade in each item individually
  });
</script>

<style>
  .frame {
    margin-top: 12px;
  }
  .slider {
    /* Needed for previous and next buttons to be vertically centered correctly */
    position: relative;
    width: 100vw;
  }

  .slides {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    justify-items: center;
    width: 20000px;
    transition-timing-function: ease;
    transition-duration: 600ms;
  }

  /* Link elements become a elements, but svelte thinks this is unused hence the global */
  :global(.slides .link) {
    width: 100%;
  }

  .slide {
    /*Darken and zoom out till selected */
    opacity: 0.3;
    transition: all 0.1s ease-out;
    transform: scale(0.6);
    filter: blur(2px);

    width: 100%;

    background-size: cover;

    align-content: center;

    /* Debugging only */
    /* border: 1px solid red; */

    /*Some images have transparent backgrounds*/
    background-color: white;
    align-content: stretch;

    /* https://neumorphism.io/#e3e3e3 */
    box-shadow: 20px 20px 60px #c1c1c1, -20px -20px 60px #ffffff;
  }

  .slide.selected {
    opacity: 1;
    transform: scale(0.8);
    filter: none;
    cursor: pointer;
  }

  .work-description {
    background: var(--vertical-fade);
    justify-items: center;
    align-content: end;
  }

  .work-description-content {
    max-width: 800px;
    padding: var(--spacing);
    grid-gap: --calc(var(--spacing) / 4);
    text-align: left;
    grid-template-columns: 7fr 3fr;
    border-radius: var(--rounded-corners);
  }

  .work-title {
    font-size: 26pt;
    margin: calc(var(--spacing) / 4) 0;
    grid-row: 1;
    grid-column: 1;
  }

  .work-logo {
    grid-area: 1 / 2 / 3 / 3;
    width: 100%;
    align-self: center;
  }

  .work-lede {
    grid-area: 2 1 3 2;
  }

  .work-title,
  .work-logo,
  .work-lede {
    float: left;
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

  @media screen and (max-width: 850px) {
    .slide {
      box-shadow: 10px 10px 20px #c1c1c1, -10px -10px 20px #ffffff;
    }
  }
</style>

<div class="slider">
  <div class="frame">
    <div
      class="slides"
      style="transform: translateX({horizontalScrollOffset}px);
      grid-template-columns: repeat({works.length}, {SLIDE_WIDTH}px);">
      {#each works as work, index}
        <Link href="/work/{work.slug}" class="link">
          <div
            class="slide {index === currentIndex ? 'selected' : ''}
            {index === 0 ? 'first' : ''}"
            style="background-image: url({STATIC_DIR}/images/work/screenshots/thumbs/{work.slug}-0.{work.imageExtension});
            min-height: {SLIDE_HEIGHT}px;">
            <div class="work-description">
              <div class="work-description-content">
                <h3 class="work-title">{work.title}</h3>
                <img
                  class="work-logo"
                  src="{STATIC_DIR}/images/logos/{work.client}.png"
                  alt={work.title}
                  loading="lazy" />
                <div class="work-lede">{work.lede}</div>
              </div>
            </div>
          </div>
        </Link>
      {/each}
    </div>
  </div>

  {#if !isFirstSlide}
    <span
      class="previous"
      on:click={function () {
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
          style="fill:none;stroke:#212121;stroke-width:1px;" />
      </svg>
    </span>
  {/if}
  {#if !isLastSlide}
    <span
      class="next"
      on:click={function () {
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
          style="fill:none;stroke:#212121;stroke-width:1px;" />
      </svg>
    </span>
  {/if}
</div>
