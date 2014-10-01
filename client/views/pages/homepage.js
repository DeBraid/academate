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

Template.homepage.helpers({
  sections: function () {
    return [
      {section: 'Template.summary'},
      {section: 'Template.intro'},
      {section: 'Template.methods'},
      {section: 'Template.results'},
      {section: 'Template.conclusion'},
      {section: 'Template.charts'},
      {section: 'Template.references'}
    ]
  }
});





