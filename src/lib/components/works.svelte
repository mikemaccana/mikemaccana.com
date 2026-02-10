<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import type { Work } from '$lib/data/works';

  export let works: Array<Work>;
  export let currentIndex = 0;

  let carousel: HTMLDivElement | undefined;

  function openModal(work: Work): void {
    if (browser) {
      const dialog = document.getElementById(`work-${work.slug}`);
      dialog?.showModal();
    }
  }

  onMount(() => {
    // Convert vertical scroll anywhere on page to horizontal scroll in carousel
    const handleWheel = (event: WheelEvent): void => {
      // Don't scroll carousel if a modal is open
      const hasOpenDialog = document.querySelector('dialog[open]');
      if (hasOpenDialog) return;

      if (carousel && event.deltaY !== 0) {
        event.preventDefault();
        carousel.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  });
</script>

<style>
  .works-carousel {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 2rem;
    scrollbar-width: none;
  }

  .works-carousel::-webkit-scrollbar {
    display: none;
  }

  .work-card {
    flex: 0 0 min(400px, 80vw);
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
  }

  .work-card:hover {
    transform: scale(1.02);
  }

  .work-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    background: white;
  }

  .work-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }

  .work-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .work-title {
    font-size: 1.5rem;
    margin: 0;
    color: var(--midgrey);
  }

  .work-logo {
    height: 42px;
    width: auto;
    margin-top: auto;
  }

  .work-years {
    font-size: 1rem;
    font-family: "Caslon";
    color: #999;
    white-space: nowrap;
    margin-left: 1rem;
  }

  .work-summary {
    color: #666;
    line-height: 1.5;
  }
</style>

<div class="works-carousel" bind:this={carousel}>
  {#each works as work}
    <article class="work-card" on:click={() => openModal(work)} on:keypress={() => openModal(work)} role="button" tabindex="0">
      <img
        class="work-image"
        src="/images/work/screenshots/{work.slug}-0.{work.imageExtension}"
        alt={work.title}
        loading="lazy"
      />
      <div class="work-info">
        <div class="work-header">
          <h2 class="work-title">{work.title}</h2>
          {#if work.startYear}
            <span class="work-years">
              {work.startYear}{work.endYear !== work.startYear ? ` - ${work.endYear}` : ''}
            </span>
          {/if}
        </div>
        <div class="work-summary">
          {@html work.description.split('</p>')[0] + '</p>'}
        </div>
        <img class="work-logo" src="/images/logos/{work.client}.png" alt="{work.title} logo" />
      </div>
    </article>
  {/each}
</div>
