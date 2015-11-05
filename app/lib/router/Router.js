/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/InternetExplorer', {
  name: 'InternetExplorer'
});

Router.route('/Chromne', {
  name: 'Chrome'
});

Router.route('/Firefox', {
  name: 'Firefox'
});

Router.route('/add', {
  name: 'AddStuff'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
