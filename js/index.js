requirejs.config({
  // By default load any module IDs from js dir
  baseUrl: 'js'
});

define(function(require){
  "use strict";
  var log = console.log.bind(console);

  var unused = require("ie9classlist"),
    agave = require("agave"),
    $ = require("jquery")

  agave.enable('av');

  // Clicking ☰ button displays nav
  $('.hamburger').on('click', function(event) {
    $('nav, body, .hamburger, .content').each(function(index, element){
      element.avtoggleClass('menu-active');
    });
    event.preventDefault();
  });

})

