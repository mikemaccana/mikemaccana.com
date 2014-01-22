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

  var ITEM_WIDTH = 180;

  var unused = require("ie9classlist"),
    agave = require("agave"),
    Ractive = require("ractive"),
    $ = require("jquery"),
    worksTemplate = require("text!/views/works.html"),
    worksData = JSON.parse(require("text!/data/works.json"))

  agave.enable('av');

  var worksRactive = new Ractive({
    el: '.stuff',
    template: worksTemplate,
    data: worksData
  });

  // Clicking ☰ button displays nav
  $('.hamburger').on('click', function(event) {
    $('nav, body, .hamburger, .content').each(function(index, element){
      element.avtoggleClass('menu-active');
    });
    event.preventDefault();
  });

  var selected = 1;

  var max = worksData.works.length;

  var $window = $(window)
  var $works = $('.work')
  var $stuff = $('.stuff')
  var $workTitle = $('.work-title')
  var $workClient = $('.work-client')
  var $workContent = $('.work-content')

  document.onkeydown = function(event) {
    if ( event.keyCode == ARROWS.LEFT ) {
      if ( selected > 1 ) {
        unselect(selected);
        selected--;
        log('left')
        scroll(selected)
        select(selected)
      }
    }
    else if ( event.keyCode == ARROWS.RIGHT ) {
      if ( selected < max ) {
        unselect(selected);
        selected++;
        log('right')
        scroll(selected)
        select(selected)
      }
    }
  }

  $works.on('mouseover', function(event){
    log('hover')
    unselect(selected);
    var thisWork = $(event.target).closest('.work')
    log('thisWork', thisWork[0])
    var index = $works.index(thisWork) + 1;
    selected = index;
    select(index);
    log('hovered on ', index)
  })

  var scroll = function(index){
    var amount = ( ITEM_WIDTH * (index - 1) );
    $stuff.animate({
        scrollLeft: amount
     }, 100);
  }

  var select = function(index){
    log('selecting', index)
    var $work = $('.work:nth-child('+index+')')
    log($work[0])
    $work.addClass('selected')

    var workData = worksData.works[(index - 1)]
    $workTitle.text(workData.title)
    $workContent.html(workData.content)
  }

  var unselect = function(index){
    var $work = $('.work:nth-child('+index+')')
    $work.removeClass('selected')
  }



  select(selected);

})

