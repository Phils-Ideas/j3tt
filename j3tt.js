if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function() {
      // Read the file and print its contents.

    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function() {

  });
}
