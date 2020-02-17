<script>
  export let works;
  export let currentIndex;
  export let isModalEnabled;
</script>

<style>
  :root {
    --modal-height: 500px;
    /* Modify 'columnWidth' value in works.js if this is changed */
    --masonry-base: 340px;
  }

  .modal-shade {
    display: grid;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    bottom: 0;
    background-color: var(--shadedgrey);
    z-index: 2;
    align-content: center;
  }

  .modal {
    z-index: 3;
    grid-row: 1;
    background-color: black;
    height: var(--modal-height);
    opacity: 1;
    position: relative;
  }

  .text {
    padding: var(--spacing);
    width: var(--single-column-threshold-width);
    max-width: 100%;
    color: whitesmoke;
    margin: 0 auto;
  }

  .screenshot-container {
    max-width: 100%;

    overflow-y: scroll;
  }

  .screenshots * {
    padding: 12px;
  }

  .tile {
    width: calc(var(--masonry-base) / 2);
  }

  .tile:first-of-type {
    width: var(--masonry-base);
  }
  .tile.description {
    width: var(--masonry-base);
    font-size: 12pt;
  }

  h1 {
    margin: 0 0 var(--spacing) 0;
    text-align: center;
    font-size: 48px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 24px;
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 850px) {
    .modal-shade {
      overflow-y: scroll;
    }

    .modal {
      /* Mobile devices sometimes hide the top of the page with the address bar, which makes the X unclickable */
      margin-top: 72px;
      height: 100vh;
      align-content: stretch;
    }

    .modal .text {
      width: 100%;
      padding: 12px;
    }

    .modal .text h1 {
      margin: 0 24px 0 0;
    }

    .screenshot-container .screenshots > * {
      padding: 2px;
    }
  }
</style>

<div class="modal-shade" style="display: {isModalEnabled ? 'grid' : 'none'};">
  <div class="modal">
    <div class="text">
      <h1>{works[currentIndex].title}</h1>
      <div class="screenshot-container">
        <div class="screenshots">
          <div class="tile description">
            {@html works[currentIndex].description}
          </div>
          {#each new Array(works[currentIndex].screenshotCount) as unused, screenshotIndex}
            <a
              href="/images/work/screenshots/{works[currentIndex].slug}-{screenshotIndex}.{works[currentIndex].imageExtension}"
              target="_blank">
              <img
                class="tile"
                src="/images/work/screenshots/{works[currentIndex].slug}-{screenshotIndex}.{works[currentIndex].imageExtension}"
                alt={works[currentIndex].slug} />
            </a>
          {/each}
        </div>
      </div>
    </div>
    <img class="close" src="/images/icons/close.svg" alt="Close" />
  </div>
</div>
