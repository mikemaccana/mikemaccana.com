requirejs.config({
  // By default load any module IDs from js dir
  baseUrl: 'js'
});

define(function(require){
  "use strict";
  var log = console.log.bind(console);

  var ARROWS = {
    LEFT: 37,
    RIGHT: 39
  }

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

  var selected = 1;

  var max = 24;

  document.onkeydown = function(event) {
    if (event.keyCode == ARROWS.LEFT) {
      if ( selected > 1 ) {
        unselect(selected);
        selected--;
        log('left')
        select(selected)
      }
    }
    else if (event.keyCode == ARROWS.RIGHT) {
      if ( selected < max ) {
        unselect(selected);
        selected++;
        log('right')
        select(selected)
      }
    }
  }

  var select = function(index){
    log('selecting', index)
    var $work = $('.work:nth-child('+index+')')
    log($work[0])
    $work.addClass('selected')
  }

  var unselect = function(index){
    var $work = $('.work:nth-child('+index+')')
    $work.removeClass('selected')
  }

  select(selected);

})

