/* ---------------------------------------------------- +/

## Main ##

/+ ---------------------------------------------------- */

Meteor.methods({
  goToByScroll: function ( id ) {
    
    $('html,body').animate({
        scrollTop: $(id).offset().top
      },'slow');

  }
});

Template.homepage.events({
  'click #leftCol a': function ( e , t ) {
    e.preventDefault();     
    
    var targetDiv = $(e.target).attr('href'),
        offset = 80;

    window.location.hash = targetDiv;

    $($(e.target).attr('href'))[0].scrollIntoView();
    scrollBy(500, offset);

    Meteor.call('goToByScroll', targetDiv);
  }
});

// Determine if current link should be active
UI.registerHelper('active', function(path) {
    return curPath() == path ? 'active' : '';
});

Template.header.events({

  // // Fix for mobile nav bar staying when switching routes
  // 'click .dropdown-menu, .navbar-collapse a': function () {

  //   var myNav = $('.navbar-header .navbar-toggle');

  //   if ( myNav.css('display') !='none' ) {

  //       myNav.trigger( 'click' );

  //   }
  // },
  'click .nav a' : function() {
    $('.collapse.in').collapse('hide');
  }
});