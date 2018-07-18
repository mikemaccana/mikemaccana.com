// https://stackoverflow.com/questions/25248286/native-js-equivalent-to-jquery-delegation
HTMLElement.prototype.on = function(event, selector, handler) {
	this.addEventListener(event, function(event) {
		let target = event.target;
		if (target.matches(selector) ) {
			handler.call(target, event);
		}
	});
};

