<script>
  import works from "../data/works.js";
  import WorkViewer from "./work-viewer.svelte";
  import Heading from "./heading.svelte";
  import WorkDetail from "./work-detail.svelte";
  import Nav from "./nav.svelte";

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

  <Nav />
  <Heading />
  <WorkViewer {works} bind:currentIndex />

  <Route exact path="/:slug" let:router>
    <WorkDetail {works} />
  </Route>
  <img src="images/autism.svg" alt="" class="autism" />
</Router>
