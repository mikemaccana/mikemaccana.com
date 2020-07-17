var log = console.log.bind(console),
	select = document.querySelector.bind(document),
	selectAll = document.querySelectorAll.bind(document);

const print = function (object) {
	return JSON.stringify(object, null, 2);
};

export { log, select, selectAll, print };
