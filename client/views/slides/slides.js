Template.slides.rendered = function () {
  $("[data-toggle=tooltip]").tooltip();
};

Template.slides.helpers({
  sections: function () {
    return [
      {baz : 'test1'},
      {baz : 'test two'},
      {baz : 'test three'},
    ]
  }
});