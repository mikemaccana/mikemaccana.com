<script lang="ts">
  import Heading from '$lib/components/heading.svelte';
  import WorkViewer from '$lib/components/works.svelte';
  import WorkDetail from '$lib/components/work-detail.svelte';
  import works from '$lib/data/works';
  import type { Work } from '$lib/data/works';

  let currentIndex = 0;

  const title = 'Mike MacCana';
  const subtitles = [
    'Full stack, onchain, and cloud infrastructure.',
    'Building, investing, growing, troubleshooting.'
  ];
</script>

<Heading {title} {subtitles} />
<WorkViewer {works} bind:currentIndex />

<!-- Render all work detail modals -->
{#each works as work}
  <WorkDetail {work} />
{/each}
