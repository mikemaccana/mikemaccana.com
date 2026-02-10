<script>
  import Nav from '$lib/components/nav.svelte';

  let isMenuActive = false;
</script>

<Nav bind:isMenuActive />
<slot />
