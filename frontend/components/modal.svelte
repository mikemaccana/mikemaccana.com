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
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    z-index: 2;
    align-content: center;
    overflow: scroll;
    padding: 24px;
    grid-row: 1;
    background-color: var(--midgrey);

    /* opacity: 1;
    position: relative;
    padding: var(--spacing);
    width: 100%;
    color: whitesmoke;
    margin: 0 auto;
    grid-auto-flow: row;
    grid-gap: 12px; */
  }

  h1 {
    margin: 0;
    text-align: left;
    font-size: 36px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .description {
    width: 100%;
    max-width: 600px;
    font-family: "Caslon";
    font-size: 14pt;
    line-height: 18pt;
    padding-left: 12px;
    padding-right: 12px;
  }

  .screenshot-container {
    width: 100%;

    /* https://codepen.io/chriscoyier/pen/XojXxy */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  img {
    width: 50%;
    object-fit: cover;
    height: 399px;
    padding: 12px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 24px;
    height: 50px;
    width: 50px;
  }
</style>

<div class="modal-shade" style="display: {isModalEnabled ? 'grid' : 'none'};">
  <h1>{works[currentIndex].title}</h1>
  <section class="description">
    {@html works[currentIndex].description}
  </section>
  <div
    class="screenshot-container {works[currentIndex].displayTip ? works[currentIndex].displayTip : ''}">

    {#each new Array(works[currentIndex].screenshotCount) as unused, screenshotIndex}
      <img
        src="/images/work/screenshots/{works[currentIndex].slug}-{screenshotIndex}.{works[currentIndex].imageExtension}"
        alt={works[currentIndex].slug} />
    {/each}
  </div>
  <img class="close" src="/images/icons/close.svg" alt="Close" />
</div>
