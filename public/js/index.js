requirejs.config({
  // By default load any module IDs from js dir
  baseUrl: 'js'
});

define(function(require){
  "use strict";
  var log = console.log.bind(console);

  var ITEM_WIDTH = {
    selected: 400,
    margin: 6,
    unselected: 180
  };

  var unused = require("classlist"),
    agave = require("agave"),
    Ractive = require("ractive"),
    worksTemplate = require("text!/views/works.html"),
    workDescriptionTemplate = require("text!/views/workdescription.html"),
    modalTemplate = require("text!/views/modal.html"),
    imagesLoaded = require("imagesloaded"),
    worksData = JSON.parse(require("text!/data/works.json"))

  agave.enable('av');

  var $ = document.querySelector.bind(document),
    $all = document.querySelectorAll.bind(document);

  var $menuToggledElements = $all('nav, body, .hamburger, .content, footer');

  // Clicking ☰ button displays nav
  $('.hamburger').addEventListener('click', function(event) {
    $menuToggledElements.avforEach(function(element, index){
      element.classList.toggle('menu-active');
    });
    event.preventDefault();
  });

  // Portfolio page stuff
  if ( window.location.pathname === '/' ) {
    var worksRactive = new Ractive({
      el: '.works-container',
      template: worksTemplate,
      data: worksData
    });

    var workDescriptionRactive = new Ractive({
      el: '.work-description',
      template: workDescriptionTemplate,
      data: {
        title: null,
        logo: null,
        lede: null
      }
    })

    var modalRactive = new Ractive({
      el: '.modal .text',
      template: modalTemplate,
      data: {
        title: null,
        message: null
      }
    })

    var $body = $('body'),
      $works = $all('.work'),
      $worksAll = $('.works'),
      $worksArea = $('.works-container'),
      $workTitle = $('.work-title'),
      $workClient = $('.work-client'),
      $workLogo = $('.work-logo'),
      $workLede = $('.work-lede'),
      $modalParent = $('.modal-parent'),
      $modalTitle = $('.modal-parent').querySelector('h1'),
      $modalDescription = $('.modal-parent').querySelector('.description'),
      $close = $('.close');

    var selected = 1,
      max = worksData.works.length;

    $works.avforEach(function($work){
      $work.addEventListener('mouseover', function(event){
        // log('hover', event.target)
        unselect(selected);
        var thisWork = event.target
        // log('thisWork', thisWork)
        var index = thisWork.avgetParentIndex() + 1;
        selected = index;
        select(index);
        // log('hovered on ', index)
      });

      $work.addEventListener('click', function(event){
        // log('Clicked yaay!')
        var thisWork = event.target
        // log('thisWork', thisWork)
        var indexZero = thisWork.avgetParentIndex();
        enableModal(worksData.works[indexZero])
        // Make dialog show the work at this index
      })
    })

    $close.addEventListener('click', function(event){
      disableModal();
    })

    var enableModal = function(work){
      $body.classList.toggle('modal-enabled');
      $modalParent.style.display = 'inline';
      modalRactive.set({
        title: work.title,
        imageExtension: work.imageExtension,
        slug: work.slug,
        description: work.description,
        screenshots: new Array(work.screenshotCount)
      });
      imagesLoaded('.screenshots img', function() {
        var screenshotsWidth = 0;
        $all('.screenshots .screenshot').avforEach(function(image){
          screenshotsWidth += image.clientWidth + ( 2 * 1 ) + ( 2 * 6 )
          log('Added ', image.clientWidth + ( 2 * 1 ) + ( 2 * 6 ))
        });
        log('Setting screenshotsWidth to:', screenshotsWidth);
        $('.screenshots').style.width = screenshotsWidth+'px';
      });
    }

    var disableModal = function(){
      $body.classList.toggle('modal-enabled');
      $modalParent.style.display = 'none';
    };

    var select = function(index){
      // log('selecting', index)
      var $work = $('.work:nth-child('+index+')')
      // log($work)
      $work.classList.add('selected')
      var workData = worksData.works[(index - 1)]
      workDescriptionRactive.set({
        title: workData.title,
        logo: $work.dataset.logo,
        lede: workData.lede
      })
    }

    var unselect = function(index){
      var $work = $('.work:nth-child('+index+')')
      $work.classList.remove('selected');
    }

    // We need to pad first item is list, so it shows in center
    var padFirstWorkItem = function(){
      log('Adjusting padding')
      var centerInWindow = Math.floor( (window.innerWidth / 2) - (ITEM_WIDTH.selected/2) ); // Keeps current item centered in window
      $works[0].style['margin-left'] = centerInWindow+'px';

      // Adjust width of .works for the amount of works we have
      var normalWorkItemWidth = 180 + 2 * 6;
      var normalItemsWidth = ( worksData.works.length - 1 ) * normalWorkItemWidth
      var selectedItemWidth = 400 + 2 * 6
      $worksAll.style.width = normalItemsWidth + selectedItemWidth + centerInWindow
      log('Works is now', normalItemsWidth + selectedItemWidth + centerInWindow)
    }

    // Re-run layout padding when window resizes, but wait until the user has stopped
    // resizing the window for 500ms first
    window.addEventListener("resize", padFirstWorkItem.avthrottle(500));

    padFirstWorkItem()
    select(selected);
  }
})

