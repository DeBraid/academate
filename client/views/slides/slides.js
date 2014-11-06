Template.tester.helpers({
  sections: function () {
    return [
      {section : 'intro' , url : '1024x700/449955' , klass : 'active item' },
      {section : 'summary' , url : '1024x700' , klass : 'item'},
      {section : 'methods' , url : '1024x700/CC1111/FFF' , klass : 'item'},
      {section : 'results' , url : '1024x700/449955' , klass : 'item'},
      {section : 'conclusion' , url : '1024x700/449955' , klass : 'item'}
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