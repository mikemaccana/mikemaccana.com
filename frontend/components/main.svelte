<script>
  import works from "../data/works.js";
  import WorkViewer from "./work-viewer.svelte";
  import Monogram from "./monogram.svelte";
  import Modal from "./modal.svelte";
  import Nav from "./nav.svelte";
  import { select, selectAll, log } from "../js/utils/basics.js";

  var print = function(object) {
    return JSON.stringify(object, null, 2);
  };

  var worksWrapper = select(".works-wrapper"),
    workDescription = select(".work-description");

  var currentIndex = 0;
  var isModalEnabled = false;
</script>

<style>
  @import url("fonts.css");
  @import url("colors.css");
  @import url("metrics.css");
  @import url("basics.css");
</style>

<Nav />
<Monogram />
<WorkViewer {works} bind:currentIndex bind:isModalEnabled />
<Modal {works} bind:currentIndex bind:isModalEnabled />
