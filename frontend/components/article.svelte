<script>
  import { router, Link } from "yrv";
  import Heading from "./heading.svelte";
  // import { superagent } from "superagent";
  export let slug = $router.params.slug;
  export let articles;
  const log = console;

  // let title = slug;
  // let subtitles = [];

  // const response = superagent.get(`localhost/api/articles/${slug}`);

  let article = articles.find(article => article.slug === slug);
  let title = article.title;
  let subtitles = [article.description];
</script>

<style>

</style>

<article>
  <Heading {title} {subtitles} />
  <h1>{slug}</h1>
  <h2>description</h2>
  <p>body goes here</p>
</article>
>
