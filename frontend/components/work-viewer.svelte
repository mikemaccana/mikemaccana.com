<script>
  import Slider from "./slider.svelte";
  import "../js/utils/element-on.js";
  import "../js/utils/get-parent-index.js";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";

  export let works;
  export let currentIndex;
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");
</style>

<Slider bind:works bind:currentIndex />
