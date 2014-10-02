Template.slides.helpers({
  sections: function () {
    return [
      {baz : 'test1'},
      {baz : 'test two'},
      {baz : 'test three'},
    ]
  }
});

// Template.slides.chooseAnswerTemplate = function () {
//     return {
//         'Fred': Template.fredAnswers,
//         'Ringo': Template.ringoAnswers,
//         'Jackson': Template.jacksonAnswers
//     }[Template.people.nameHelper.call(this)];
// };