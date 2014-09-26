Template.homepage.rendered = function () {
  /* activate sidebar */
  $('#sidebar').affix({
    offset: {
      top: 255
    }
  });

  /* activate scrollspy menu */
  var $body   = $(document.body);
  var navHeight = $('.navbar').outerHeight(true)*1.5;

  $body.scrollspy({
    target: '#leftCol',
    offset: navHeight
  });

};