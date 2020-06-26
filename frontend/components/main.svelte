<script>
  import works from "../data/works.js";
  import WorkViewer from "./work-viewer.svelte";
  import Heading from "./heading.svelte";
  import WorkDetail from "./work-detail.svelte";
  import Nav from "./nav.svelte";
  import "tocca";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { router, Router, Route, Link } from "yrv";

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

  var print = function(object) {
    return JSON.stringify(object, null, 2);
  };

  var worksWrapper = select(".works-wrapper"),
    workDescription = select(".work-description");

  var currentIndex = 0;
</script>

<style>
  @import url("fonts.css");
  @import url("colors.css");
  @import url("metrics.css");
  @import url("basics.css");
</style>

<Router>

  <Nav />
  <Heading />
  <WorkViewer {works} bind:currentIndex />

  <Route exact path="/:slug" let:router>
    <WorkDetail {works} />
  </Route>
</Router>
