
/**
 * Module dependencies.
 */

var views = require('co-views');

var setupRenderer = function(app){
  return views(__dirname + '/../views', {
    map: { html: 'swig' },
    // https://github.com/visionmedia/co-views/issues/8
    cache : app.env !== 'production' ? false : 'memory'
  })
}

// setup views mapping .html
// to the swig template engine
module.exports = setupRenderer;
