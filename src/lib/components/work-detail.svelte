<script lang="ts">
  import type { Work } from '$lib/data/works';

  export let work: Work;
</script>

<style>
  dialog {
    max-width: 90vw;
    max-height: 90vh;
    border: none;
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
  }

  .modal-content {
    padding: 2rem;
    overflow-y: auto;
    max-height: 85vh;
  }

  .close-button {
    position: sticky;
    top: 1rem;
    right: 1rem;
    margin-left: auto;
    display: block;
    background: white;
    border: 2px solid var(--midgrey);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.2s;
  }

  .close-button:hover {
    background: var(--midgrey);
    color: white;
  }

  h1 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
    color: var(--midgrey);
  }

  .description {
    font-family: "Caslon";
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 2rem;
    color: #333;
  }

  .description :global(a) {
    color: #0066cc;
    text-decoration: underline;
  }

  .description :global(a:hover) {
    color: #0052a3;
  }

  .screenshots {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .screenshots img {
    width: 100%;
    border-radius: 8px;
    background: white;
  }
</style>

<dialog id="work-{work.slug}">
  <div class="modal-content">
    <button class="close-button" on:click={(e) => e.target.closest('dialog').close()}>×</button>

    <h1>{work.title}</h1>

    <div class="description">
      {@html work.description}
    </div>

    <div class="screenshots">
      {#each Array(work.screenshotCount) as _, i}
        <img
          src="/images/work/screenshots/{work.slug}-{i}.{work.imageExtension}"
          alt="{work.title} screenshot {i + 1}"
          loading="lazy"
        />
      {/each}
    </div>
  </div>
</dialog>
