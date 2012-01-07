$(function()    {
  $('#slides').presentr({
    speed: 500,
    pageDisplay: $('#slideinfo'),
    hashJump: true,
    hashPrefix: 'slide',
    slideFunctions: {
      '4': {
        enter: function() { $('.slide4elements').hide(); },
        subslides: [
          function() { $('#bulletPoint1').fadeIn(); },
          function() { $('#bulletPoint2').fadeIn(); },
          function() { $('#bulletPoint3').fadeIn(); },
          function() { $('#codeSnippet').fadeIn(); }
        ],
        exit: function() { $('.slide4elements').hide(); }
      },
      '7': {
        enter: DEMOS.trig.start,
        exit: DEMOS.trig.stop
      }
    }
  });

  $('#slides').bind('slide.presentr', function(e, slide, dir) {
    log('Slide: ' + slide + ', Direction: ' + dir);
  });

  $('#slides').bind('subslide.presentr', function(e, subslide) {
    log('Subslide: ' + subslide);
  });


  function log(s) {
    if (window.console && console.log) { console.log(s); }
  }
});
