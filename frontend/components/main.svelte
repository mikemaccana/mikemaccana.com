<script>
  import works from "../data/works.js";
  import articles from "../data/articles.js";
  import WorkViewer from "./work-viewer.svelte";
  import Heading from "./heading.svelte";
  import WorkDetail from "./work-detail.svelte";
  import Nav from "./nav.svelte";
  import Blog from "./blog.svelte";

  import { select, selectAll, log, print } from "../js/utils/basics.js";
  import { router, Router, Route, Link } from "yrv";

  let isMenuActive = false;

  let body = window.document.body;

  router.subscribe(event => {
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
</script>

<style>
  @import url("fonts.css");
  @import url("colors.css");
  @import url("metrics.css");
  @import url("basics.css");
  @import url("animations.css");

  .autism {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    margin: 7px;
    opacity: 0.15;
  }
</style>

<Router>

  <Nav bind:isMenuActive />
  <Heading />
  <WorkViewer {works} bind:currentIndex />

  <!-- Must come first, everything else is a route -->
  <Route exact path="/blog" let:router>
    <Blog bind:isMenuActive {articles} />
  </Route>

  <Route exact path="/:slug" let:router>
    <WorkDetail {works} />
  </Route>

  <img src="images/autism.svg" alt="" class="autism" />
</Router>
