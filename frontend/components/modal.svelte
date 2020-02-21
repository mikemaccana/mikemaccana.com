<script>
  export let works;
  export let currentIndex;
  export let isModalEnabled;
</script>

<style>
  :root {
    --modal-height: 500px;
    --masonry-base: 388px;
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
    background-color: var(--midgrey);
    height: var(--midgrey);
    opacity: 1;
    position: relative;
  }

  .content {
    padding: var(--spacing);
    width: var(--single-column-threshold-width);
    max-width: 100%;
    color: whitesmoke;
    margin: 0 auto;
    grid-template-rows: 56px auto;
  }

  .screenshot-container {
    max-width: 100%;
    overflow-y: scroll;

    /* https://codepen.io/chriscoyier/pen/XojXxy */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 900px;
  }

  .screenshot-container.x-small {
    height: 300px;
  }

  .screenshot-container.small {
    height: 600px;
  }

  .screenshot-container.medium {
    height: 800px;
  }

  .screenshot-container.large {
    height: 1100px;
  }

  .screenshot-container.x-large {
    height: 1700px;
  }

  .screenshot-container::-webkit-scrollbar {
    width: 8px;
  }

  .screenshot-container img {
    background-color: white;
  }

  .screenshot-container::-webkit-scrollbar-track {
    background: var(--slightlyshadedgrey);
    border-radius: 6px;
  }
  .screenshot-container::-webkit-scrollbar-thumb {
    background-color: var(--lightgrey);
    border-radius: 6px;
    border: 1px solid var(--midgrey);
  }

  .screenshot-container .tile,
  .screenshot-container a {
    margin: 6px;
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
    margin: 0;
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
      /* Mobile devices can hide the top of the page with a dynanmically appearing address bar, which makes the X unclickable */
      margin-top: 72px;
      height: 100vh;
      align-content: stretch;
    }

    .modal .content {
      width: 100%;
      padding: 12px;
    }

    .modal .content h1 {
      margin: 0 24px 0 0;
    }

    .screenshot-container > * {
      padding: 2px;
    }
  }
</style>

<div class="modal-shade" style="display: {isModalEnabled ? 'grid' : 'none'};">
  <div class="modal">
    <div class="content">
      <h1>{works[currentIndex].title}</h1>
      <div
        class="screenshot-container {works[currentIndex].displayTip ? works[currentIndex].displayTip : ''}">
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
    <img class="close" src="/images/icons/close.svg" alt="Close" />
  </div>
</div>
