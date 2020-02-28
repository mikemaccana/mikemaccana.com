<script>
  export let works;
  export let currentIndex;
</script>

<style>
  .work-description {
    justify-items: center;
  }

  .work-description-content {
    background-color: var(--shadedgrey);
    max-width: 600px;
    padding: var(--spacing);
    grid-gap: var(--spacing);
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
</style>

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
