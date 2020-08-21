<script>
  import { router, Link } from "yrv";
  import Heading from "./heading.svelte";
  import { http } from "../js/utils/modern-http.js";
  import * as marked from "marked";
  export let slug = $router.params.slug;
  export let articles;
  const log = console.log.bind(console);

  const parseMarkdown = marked.default;

  // let title = slug;
  // let subtitles = [];

  const STATIC_DIR = "/_static";

  let article = articles.find(article => article.slug === slug);
  let title = article.title;
  let subtitles = [article.description];

  let articleHtml = "";

  //
  (async function() {
    const response = await http.get(`${STATIC_DIR}/markdown/${slug}.md`);

    articleHtml = parseMarkdown(response.decodedBody);
  })();
</script>

<style>
  .blog {
    justify-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e3e3e3;
    grid-template-rows: 512px auto;
  }
  article {
    width: 100%;
    background-color: white;
    justify-content: center;
  }
  .column {
    padding: 0 32px;

    max-width: 800px;
  }
  :global(.blog article .column > *) {
    color: var(--midgrey);
    display: block;
  }

  :global(.blog article h2) {
    line-height: 40px;
    margin-top: 1.25em;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-size: 36px;
  }

  :global(.blog article pre) {
    font-size: 21px;
    line-height: 32px;
  }

  :global(.blog article p) {
    margin-top: 2em;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-size: 21px;
    line-height: 32px;
  }
</style>

<div class="blog">
  <Heading {title} {subtitles} />

  <article>
    <div class="column">
      {@html articleHtml}
    </div>

  </article>
</div>
>
