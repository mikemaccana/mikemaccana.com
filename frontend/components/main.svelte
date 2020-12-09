<script>
  import works from "../data/works.js";
  import articles from "../data/articles.js";
  import WorkViewer from "./works.svelte";
  import Heading from "./heading.svelte";
  import Article from "./article.svelte";
  import WorkDetail from "./work-detail.svelte";
  import Nav from "./nav.svelte";
  import Blog from "./blog.svelte";

  import { select, selectAll, log, print } from "../ts/utils/basics.ts";
  import { router, Router, Route, Link } from "yrv";

  let isMenuActive = false;

  let body = window.document.body;

  router.subscribe((event) => {
    if (!event.initial) {
      if (event.path === "/") {
        body.style["overflow-y"] = "hidden";
      } else {
        body.style["overflow-y"] = "scroll";
      }
    }
  });

  var worksWrapper = select(".works-wrapper"),
    workDescription = select(".work-description");

  var currentIndex = 0;

  const title = "Mike MacCana";
  const subtitles = [
    "Front end, back end, cloud infrastructure.",
    "Founding, bootstrapping, hiring, troubleshooting.",
  ];
</script>

<style>
  @import url("fonts.css");
  @import url("colors.css");
  @import url("metrics.css");
  @import url("basics.css");
  @import url("animations.css");
</style>

<Router>
  <Nav bind:isMenuActive />
  <Route exact path="/" let:router>
    <Heading {title} {subtitles} />
    <WorkViewer {works} bind:currentIndex />
  </Route>

  <!-- Must come first, everything else is a route -->
  <Route exact path="/blog" let:router>
    <Blog bind:isMenuActive {articles} />
  </Route>

  <Route exact path="/blog/:slug" let:router>
    <Article {articles} />
  </Route>

  <Route exact path="/work/:slug" let:router>
    <WorkDetail {works} />
  </Route>

  <Route fallback>Not found</Route>
</Router>
