<script>
  import Blog from '$lib/components/blog.svelte';
  import articles from '$lib/data/articles.js';

  let isMenuActive = false;
</script>

<Blog {articles} bind:isMenuActive />
