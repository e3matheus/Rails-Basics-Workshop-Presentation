$(function()    {
  $('#slides').presentr({
    speed: 500,
    pageDisplay: $('#slideinfo'),
    hashJump: true,
    hashPrefix: 'slide',
    slideFunctions: {
      '3': {
        subslides: [
          function() { $('#misconception').addClass("strike"); },
          function() { $('#principles').fadeIn(); },
          function() { $('#idea').fadeIn(); },
        ],
        exit: function() { $('.slide3elements').hide(); }
      },
      '5': {
        enter: function() { $('.slide3elements').hide(); },
        subslides: [
          function() { $('#bulletPoint1').fadeIn(); },
          function() { $('#bulletPoint2').fadeIn(); },
          function() { $('#bulletPoint3').fadeIn(); },
        ],
        exit: function() { $('.slide3elements').hide(); }
      }
    }
  });
});
