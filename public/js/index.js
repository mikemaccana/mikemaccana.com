requirejs.config({
  // By default load any module IDs from js dir
  baseUrl: 'js'
});

define(function(require){
  "use strict";
  var log = console.log.bind(console);

  var unused = require("classlist"),
    agave = require("agave"),
    Ractive = require("ractive"),
    imagesLoaded = require("imagesloaded"),
    Snap = require("snap"),
    worksTemplate = require("text!/views/works.html"),
    workDescriptionTemplate = require("text!/views/workdescription.html"),
    modalTemplate = require("text!/views/modal.html"),
    worksData = JSON.parse(require("text!/data/works.json"))

  agave.enable('av');

  window.query = document.querySelector.bind(document),
    window.queryAll = document.querySelectorAll.bind(document);

  var ITEM_WIDTH = {
    selected: 400,
    margin: 6,
    unselected: 180
  };

  var menuToggledElements = queryAll('nav, body, .hamburger, .content, footer');

  // Clicking ☰ button displays nav
  query('.hamburger').addEventListener('click', function(event) {
    menuToggledElements.avforEach(function(element, index){
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

    var body = query('body'),
      works = queryAll('.work'),
      worksAll = query('.works'),
      worksArea = query('.works-container'),
      workTitle = query('.work-title'),
      workClient = query('.work-client'),
      workLogo = query('.work-logo'),
      workLede = query('.work-lede'),
      modalParent = query('.modal-parent'),
      modalTitle = query('.modal-parent').querySelector('h1'),
      modalDescription = query('.modal-parent').querySelector('.description'),
      close = query('.close');

    var selected = 1,
      max = worksData.works.length;

    works.avforEach(function(work){
      work.addEventListener('mouseover', function(event){
        // log('hover', event.target)
        unselect(selected);
        var thisWork = event.target
        // log('thisWork', thisWork)
        selected = thisWork.avgetParentIndex() + 1;
        select(selected);
        // log('hovered on ', index)
      });

      work.addEventListener('click', function(event){
        // log('Clicked yaay!')
        var thisWork = event.target
        // log('thisWork', thisWork)
        var indexZero = thisWork.avgetParentIndex();
        enableModal(worksData.works[indexZero])
        // Make dialog show the work at this index
      })
    })

    var scroll = function(index){
      var itemFullWidth = ITEM_WIDTH.unselected + (ITEM_WIDTH.margin * 2)
      var amount = ( itemFullWidth * (index - 1) );
      worksArea.scrollLeft = amount;
    }

    worksArea.addEventListener('touchend', function(ev){
      var changedTouches = ev.changedTouches[0];
      var elem = document.elementFromPoint(changedTouches.pageX, changedTouches.pageY);
      var itemNumber = elem.avgetParentIndex()
      unselect(selected);
      selected = itemNumber;
      log('Selected element', itemNumber)
      select(itemNumber)
    });

    close.addEventListener('click', function(event){
      disableModal();
    })

    var enableModal = function(work){
      body.classList.toggle('modal-enabled');
      modalParent.style.display = 'inline';
      modalRactive.set({
        title: work.title,
        imageExtension: work.imageExtension,
        slug: work.slug,
        description: work.description,
        screenshots: new Array(work.screenshotCount)
      });
      imagesLoaded('.screenshots img', function() {
        var screenshotsWidth = 0;
        queryAll('.screenshots .screenshot').avforEach(function(image){
          screenshotsWidth += image.clientWidth + ( 2 * 1 ) + ( 2 * 6 )
          log('Added ', image.clientWidth + ( 2 * 1 ) + ( 2 * 6 ))
        });
        log('Setting screenshotsWidth to:', screenshotsWidth);
        ('.screenshots').style.width = screenshotsWidth+'px';
      });
    }

    var disableModal = function(){
      body.classList.toggle('modal-enabled');
      modalParent.style.display = 'none';
    };

    var select = function(index){
      // log('selecting', index)
      var work = query('.work:nth-child('+index+')')
      // log(work)
      work.classList.add('selected')
      var workData = worksData.works[(index - 1)]
      workDescriptionRactive.set({
        title: workData.title,
        logo: work.dataset.logo,
        lede: workData.lede
      })
    }

    var unselect = function(index){
      var work = query('.work:nth-child('+index+')')
      if ( work ) {
        work.classList.remove('selected');
      } else {
        log('Could not find a work with index', index)
      }
    }

    // We need to pad first item is list, so it shows in center
    var padFirstWorkItem = function(){
      log('Adjusting padding')
      var worksOffset = Math.floor( (window.innerWidth / 2) - (ITEM_WIDTH.selected/2) ); // Keeps current item centered in window
      works[0].style['margin-left'] = worksOffset+'px';

      // Adjust width of .works for the amount of works we have
      var normalWorkItemWidth = 180 + 2 * 6;
      var normalItemsWidth = ( worksData.works.length - 1 ) * normalWorkItemWidth
      var selectedItemWidth = 400 + 2 * 6
      worksAll.style.width = normalItemsWidth + selectedItemWidth + worksOffset
      log('Works is now', normalItemsWidth + selectedItemWidth + worksOffset)
    }

    // Re-run layout padding when window resizes, but wait until the user has stopped
    // resizing the window for 500ms first
    window.addEventListener("resize", padFirstWorkItem.avthrottle(500));
    padFirstWorkItem()
    select(selected);
  }

  var drawMongogram = function(){
    log('Drawing monogram')
    var monogram = Snap.select(".monogram")
    var bigM = monogram.select('#big-m');
    var smallM = monogram.select('#small-m');
    var works = queryAll('.works .work')
    var worksWrapper = query('.works-wrapper')
    var workDescription = query('.work-description')
    var content = query('.content')
    var title = query('.intro h1');
    var sub = query('.intro h2');
    // See http://raphaeljs.com/reference.html#Element.transform for transform syntax
    bigM.animate({
      transform: "T70,0",
      opacity: 1,
      fill: 'whiteSmoke'
    }, 1000, mina.easeout)
    smallM.animate({
      transform: "T0,70",
      opacity: 1,
      fill: 'white'
    }, 1500, mina.easeout)

    setTimeout(function(){
      title.classList.toggle('visible');
    }, 750)

    setTimeout(function(){
      sub.classList.toggle('visible');
    }, 1000)

    setTimeout(function(){
      content.classList.remove('loading');
    }, 1500)

    setTimeout(function(){
      imagesLoaded('.works .work', function(event) {
        worksWrapper.classList.remove('loading');
        workDescription.classList.remove('loading');
        // Fade in each item individually
        works.avforEach(function(element, index){
          setTimeout(function(){
            element.classList.toggle('visible');
          }, index * 300)
        })
        workDescription.classList.toggle('visible');
      })
    }, 2000)

  }

  drawMongogram();
})

