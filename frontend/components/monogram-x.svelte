<script>
  import { mina, Snap } from "../js/thirdparty/snap-svg.js";
  import { select, selectAll, log } from "../js/utils/basics.js";
  import { onMount } from "svelte";
  console.log(`Hello from monogram.svelte`);

  // log(`mina is ${mina}`)

  onMount(function() {
    log("Drawing monogram");
    var monogram = Snap.select(".monogram"),
      bigM = monogram.select("#big-m"),
      smallM = monogram.select("#small-m"),
      content = select(".content"),
      title = select("h1"),
      subTitle = select("h2");

    // See http://raphaeljs.com/reference.html#Element.transform for transform syntax
    // Note there's a spurious 'Cannot find name mina' even though mina exists and has a value
    bigM.animate(
      {
        transform: "T100,0",
        opacity: 1,
        fill: "whiteSmoke"
      },
      1000,
      mina.easeout,
      function() {
        smallM.animate(
          {
            transform: "T0,100",
            opacity: 1,
            fill: "white"
          },
          1500,
          mina.easeout,
          function() {
            title.classList.add("visible");
            setTimeout(function() {
              subTitle.classList.add("visible");
              log(`Words should now be shown`);
              setTimeout(function() {
                document.body.classList.remove("loading");
              }, 2000);
            }, 1000);
          }
        );
      }
    );
  });
</script>

<style>
  @import url("../css/colors.css");
  @import url("../css/metrics.css");

  .monogram-and-heading {
    padding: 0 24px;
    text-align: center;
    grid-column: 1;
  }

  .monogram {
    margin-top: calc(var(--spacing) / 4);
    height: 60px;
    width: 60px;
    justify-self: center;
  }

  h1,
  h2,
  h3 {
    margin: calc(var(--spacing) / 4) 0;
    opacity: 0;
    transition: all 4s ease-out;
  }

  h1,
  h2,
  h3 .visible {
    opacity: 1;
  }

  /* @media screen and (max-width: var(--small-desktop-threshold-width)) {
		.monogram-and-heading {
			margin-top: 12px;
			margin-bottom: 12px;	
		}

		.monogram {
			margin-top: 48px;
			height: 48px;
			width: 48px;
		}
		h1 {
			font-size: 16pt;
		}
		h2 {
			font-size: 12pt;
		}
	} */
</style>

<div class="monogram-and-heading">
  <svg
    class="monogram"
    width="401px"
    height="769px"
    viewBox="0 0 401 769"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <defs />
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      sketch:type="MSPage">
      <g id="monogram" sketch:type="MSLayerGroup" fill="#222222">
        <g
          id="big-m"
          transform="translate(67.000000, 209.000000)"
          sketch:type="MSShapeGroup">
          <path
            d="M0,0 L0,544 L12,560 L12,28 L125,131 L81,175 L132.710938,223
            L132.710938,207 L97,175 L132.710938,140 L132.710938,123 L0,0 Z"
            id="left" />
          <path
            d="M133.644531,0 L133.644531,544 L145.644531,560 L145.644531,28
            L256.644531,132 L214.644531,175 L266.355469,223 L266.355469,207
            L230.644531,175 L266.355469,140 L266.355469,123 L133.644531,0 Z"
            id="right"
            transform="translate(200.000000, 280.000000) scale(-1, 1)
            translate(-200.000000, -280.000000) " />
        </g>
        <g id="small-m" sketch:type="MSShapeGroup">
          <path
            d="M0,1 L0,402 L12,417 L12,29 L201,217 L201,201 L0,1 Z"
            id="left" />
          <path
            d="M200,0 L200,401 L212,416 L212,28 L401,216 L401,200 L200,0 Z"
            id="right"
            transform="translate(300.500000, 208.000000) scale(-1, 1)
            translate(-300.500000, -208.000000) " />
        </g>
      </g>
    </g>
  </svg>
  <h1>Mike MacCana</h1>
  <h2>I make technology products</h2>
</div>
