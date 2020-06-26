<script>
  import { router, Link } from "yrv";
  export let works;

  export let slug = $router.params.slug;

  const work = works.find(work => work.slug === slug);
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
    padding: 24px;
    grid-row: 1;
    background-color: var(--midgrey);
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

  @media screen and (max-width: 850px) {
    img {
      width: 100%;
    }
  }
</style>

<div class="modal-shade">
  <h1>{work.title}</h1>
  <section class="description">
    {@html work.description}
  </section>
  <div class="screenshot-container {work.displayTip ? work.displayTip : ''}">

    {#each new Array(work.screenshotCount) as unused, screenshotIndex}
      <img
        src="/images/work/screenshots/{work.slug}-{screenshotIndex}.{work.imageExtension}"
        alt={work.slug} />
    {/each}
  </div>
  <Link href="/">
    <img class="close" src="/images/icons/close.svg" alt="Close" />
  </Link>
</div>
