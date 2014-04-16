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

  var ITEM_WIDTH = {
    selected: 400,
    margin: 6,
    unselected: 180
  };

  var unused = require("ie9classlist"),
    agave = require("agave"),
    Ractive = require("ractive"),
    worksTemplate = require("text!/views/works.html"),
    worksData = JSON.parse(require("text!/data/works.json"))

  agave.enable('av');

  var $ = document.querySelector.bind(document),
    $all = document.querySelectorAll.bind(document);

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

  var selected = 1,
    max = worksData.works.length;

  document.addEventListener('keydown', function(event) {
    // log('keydown!')
    var scroll = function(index){
      var itemFullWidth = ITEM_WIDTH.unselected + (ITEM_WIDTH.margin * 2)
      var amount = ( itemFullWidth * (index - 1) );
      $worksArea.scrollLeft = amount; // + centerInWindow
    }
    if ( event.keyCode == ARROWS.LEFT ) {
      if ( selected > 1 ) {
        unselect(selected);
        selected--;
        //log('left')
        scroll(selected)
        select(selected)
      }
    }
    else if ( event.keyCode == ARROWS.RIGHT ) {
      if ( selected < max ) {
        unselect(selected);
        selected++;
        //log('right')
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
    $work.style['background-image'] = $work.dataset.screenshot;

    var workData = worksData.works[(index - 1)]
    $workTitle.textContent = workData.title;
    $workClient.textContent = 'Client : '+workData.client;
    $workContent.innerHTML = workData.content;
  }

  var unselect = function(index){
    var $work = $('.work:nth-child('+index+')')
    $work.classList.remove('selected');
    $work.style['background-image'] = $work.dataset.logo;
  }

  // We need to pad first item is list, so it shows in center
  var centerInWindow = Math.floor( (window.innerWidth / 2) - (ITEM_WIDTH.selected/2) ); // Keeps current item centered in window
  $works[0].style['margin-left'] = centerInWindow+'px';

  select(selected);
})

