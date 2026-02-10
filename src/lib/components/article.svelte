<script>
  import Heading from "./heading.svelte";
  import { http } from "../ts/utils/modern-http.ts";
  import { marked } from "marked";
  import { onMount } from "svelte";
  import { log, print } from "../ts/utils/basics.ts";

  export let articles;
  export let slug;

  const parseMarkdown = marked.parse;

  const STATIC_DIR = "";

  $: article = articles.find((article) => article.slug === slug);
  $: title = article?.title || "";
  $: subtitles = article ? [article.description] : [];

  let articleHtml = "";

  $: if (slug) {
    (async () => {
      const response = await http.get(`${STATIC_DIR}/markdown/${slug}.md`);
      articleHtml = parseMarkdown(response.body);
    })();
  }
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
    margin-bottom: 512px;
  }
  /* TODO - why are these global? I guess because they're dynamic? */
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

  :global(.blog article p, .blog article li) {
    font-size: 21px;
    line-height: 32px;
  }

  :global(.blog article p) {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 2em;
  }

  :global(.blog article .the-point) {
    font-size: 52px;
    line-height: 64px;
    text-align: center;
    margin-bottom: 32px;
    margin-left: -128px;
    margin-right: -128px;
    margin-top: 64px;
  }

  :global(.blog article a, .blog article a:hover, .blog article a:active, .blog
      article
      a:visited) {
    color: var(--midgrey);
    text-decoration: underline;
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
