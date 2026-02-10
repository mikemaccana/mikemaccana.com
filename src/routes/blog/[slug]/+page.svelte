<script>
  import Article from '$lib/components/article.svelte';
  import articles from '$lib/data/articles.js';
  import { page } from '$app/stores';

  $: slug = $page.params.slug;
</script>

<Article {articles} {slug} />
