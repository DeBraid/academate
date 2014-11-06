Template.header.events({
  'click #scrollToTop': function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});


Template.header.helpers({
  screenWidth: function () {
    var scrWd = true;
    var width = $('.navbar').innerWidth();
    var smallWidth = $('.navbar-header').innerWidth();
    console.log(width);
    
    if (width || smallWidth > 650) {
      scrWd = false;
    }
    console.log(scrWd);
    return scrWd;
  }
})

Template.header.events({
  'click .navbar-nav a': function ( e , t ) {
    e.preventDefault();     
    
    var targetDiv = $(e.target).attr('href'),
        offset = 80;

    window.location.hash = targetDiv;

    $($(e.target).attr('href'))[0].scrollIntoView();
    scrollBy(500, offset);

    Meteor.call('goToByScroll', targetDiv);
  }
});


Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})