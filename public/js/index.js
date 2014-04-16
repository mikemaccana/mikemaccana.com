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
    worksTemplate = require("text!/views/works.html"),
    worksData = JSON.parse(require("text!/data/works.json"))

  agave.enable('av');

  var $ = document.querySelector.bind(document);
  var $all = document.querySelectorAll.bind(document);

  var worksRactive = new Ractive({
    el: '.stuff',
    template: worksTemplate,
    data: worksData
  });

  var $works = $all('.work'),
    $worksArea = $('.stuff'),
    $workTitle = $('.work-title'),
    $workClient = $('.work-client'),
    $workContent = $('.work-content'),
    menuToggledElements = $('nav, body, .hamburger, .content');

  // Clicking ☰ button displays nav
  $('.hamburger').addEventListener('click', function(event) {
    menuToggledElements.each(function(index, element){
      element.classList.toggle('menu-active');
    });
    event.preventDefault();
  });

  var selected = 1;

  var max = worksData.works.length;

  document.addEventListener('keydown', function(event) {
    log('keydown!')
    var scroll = function(index){
      var amount = ( ITEM_WIDTH * (index - 1) );
      log(amount)
      $worksArea.scrollLeft = amount;
    }
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
  });

  $works.avforEach(function($work){
    $work.addEventListener('mouseover', function(event){
      log('hover', event.target)
      unselect(selected);
      var thisWork = event.target
      log('thisWork', thisWork)
      var index = thisWork.avgetParentIndex() + 1;
      selected = index;
      select(index);
      log('hovered on ', index)
    });
  })

  var select = function(index){
    log('selecting', index)
    var $work = $('.work:nth-child('+index+')')
    log($work)
    $work.classList.add('selected')

    var workData = worksData.works[(index - 1)]
    $workTitle.textContent = workData.title;
    $workClient.textContent = 'Client : '+workData.client;
    $workContent.htmlContent = workData.content;
  }

  var unselect = function(index){
    var $work = $('.work:nth-child('+index+')')
    $work.classList.remove('selected')
  }

  select(selected);
})

