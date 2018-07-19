import * as agave from  "./thirdparty/agave.js";

import WorkViewerComponent from "./works.svelte";


agave.enable('av');



// Return index of node under its parents. Eg, if you're the fourth child, return 3.
Element.prototype.avgetParentIndex = function() {
	return Array.prototype.indexOf.call(this.parentNode.children, this);
}

const showPortfolio = function(){

	// Instantiate component
	const workViewerComponent = new WorkViewerComponent({
		target: document.querySelector('.works-wrapper'),
	});

};

export default showPortfolio;
