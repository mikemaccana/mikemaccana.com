<script>
  import Heading from "./heading.svelte";

  export let isMenuActive;
  export let articles;
  isMenuActive = false;

  // Eg, "6 March 2015" to "6th March 2015"
  let toPrettyDate = function(dateString) {
    var dateStringBits = dateString.split(" ");
    return `${Number(dateStringBits[0])} ${dateStringBits.splice(1).join(" ")}`;
  };

  const title = "Blog";
  const subtitles = ["Musings on technology"];
</script>

<style>
  :root {
    --gunmetal-blue: #d8d8d8e0;
    --gray-blue: #cececee0;
    --blue-neon: #a2a2a2e0;
    --smoky-dark-blue: #e6e8eee0;
    --black: #e8e7e7e0;
    --mid-blue: #efefefe0;
  }
  .blog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e3e3e3;
    grid-template-rows: 512px auto;
  }

  .blog > header {
    height: 100px;
    margin: 128px 0;
  }

  h2,
  p {
    color: var(--midgrey);
  }

  h2 {
    margin: 12px 24px;
  }

  .blog-posts h2 {
    font-size: 26pt;
  }

  .blog-posts {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  /* Highlight most recent blog post */
  a.blog-post:first-of-type {
    grid-area: 1 / 1 / 2 / 3;
  }

  a.blog-post {
    width: 100%;
    height: 400px;
    display: grid;
    justify-items: center;

    /* background is specified inline */
    filter: grayscale(1);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Remove default link styling */
    text-decoration: none;
    color: white;
    position: relative;
  }

  /* Shade background image */
  a.blog-post header {
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    display: grid;
    position: absolute;
    align-content: center;
    text-align: center;
  }

  .blog-post:nth-child(5n + 1) header {
    background: linear-gradient(135deg, var(--mid-blue), var(--black));
  }
  .blog-post:nth-child(5n + 2) header {
    background: linear-gradient(135deg, var(--gunmetal-blue), var(--black));
  }
  .blog-post:nth-child(5n + 3) header {
    background: linear-gradient(135deg, var(--gray-blue), var(--black));
  }
  .blog-post:nth-child(5n + 4) header {
    background: linear-gradient(135deg, var(--blue-neon), var(--black));
  }
  .blog-post:nth-child(5n + 5) header {
    background: linear-gradient(135deg, var(--smoky-dark-blue), var(--black));
  }

  @media screen and (max-width: 850px) {
    .blog-posts {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }
</style>

<div class="blog">

  <Heading {title} {subtitles} />

  <div class="blog-posts">

    {#each articles as article, index}
      <a
        class="blog-post {article.slug}"
        href={article.isOldBlog ? `https://expeditedsecurity.com/blog/${article.slug}` : `/blog/${article.slug}`}
        style="background-image: url(/images/blog/{article.image})">
        <header>
          <h2>{article.title}</h2>
          <p class="byline">{toPrettyDate(article.date)}</p>
        </header>
      </a>
    {/each}

  </div>

</div>
