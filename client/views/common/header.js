Template.header.events({
  'click #scrollToTop': function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});


Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})