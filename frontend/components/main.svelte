<script>
  import works from "../data/works.js";
  import WorkViewer from "./work-viewer.svelte";
  import Monogram from "./monogram.svelte";
  import WorkDetail from "./work-detail.svelte";
  import Nav from "./nav.svelte";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { Router, Route, Link } from "yrv";

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
  <Monogram />
  <WorkViewer {works} bind:currentIndex />

  <Route exact path="/:slug" let:router>
    <WorkDetail {works} />
  </Route>
</Router>
