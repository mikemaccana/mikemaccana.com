<script>
  import { router, Link } from "yrv";
  import Heading from "./heading.svelte";
  // import axios from "axios";
  export let slug = $router.params.slug;

  let title = slug;
  let subtitles = [];
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
