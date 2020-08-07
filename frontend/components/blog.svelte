<script>
  export let isMenuActive;
  export let articles;
  isMenuActive = false;

  // Eg, "6 March 2015" to "6th March 2015"
  let toPrettyDate = function(dateString) {
    var dateStringBits = dateString.split(" ");
    return `${Number(dateStringBits[0])} ${dateStringBits.splice(1).join(" ")}`;
  };
</script>

<style>
  :root {
    --gunmetal-blue: #4f6977ee;
    --gray-blue: #558badee;
    --blue-neon: #6feef8ee;
    --smoky-dark-blue: #32457fee;
    --black: #555555ee;
    --mid-blue: #2781ceee;
  }
  .blog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
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
    /* border: solid 1px red; */
    width: 100%;
    height: 400px;
    display: grid;
    justify-items: center;

    /* specified inline */
    /* background: url(""); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Remove default link styling */
    text-decoration: none;
    color: white;
    position: relative;
  }

  /* Shades background image */
  a.blog-post header {
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    display: grid;
    position: absolute;
    /* opacity: 0.93;
    background-color: #222; */

    align-content: center;
    text-align: center;
  }

  h2 {
    margin: 24px;
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

  /* @media screen and (max-width: 850px) {
    a.blog-post {
      width: 50%;
    }
  }*/
</style>

<div class="blog">
  <h1>blog</h1>

  <div class="blog-posts">

    {#each articles as article, index}
      <a
        class="blog-post {article.slug}"
        href="/blog/{article.slug}"
        style="background-image: url(/images/blog/{article.image})">
        <header>
          <h2>{article.title}</h2>
          <p class="byline">{toPrettyDate(article.date)}</p>
        </header>
      </a>
    {/each}

  </div>

</div>
