import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://jinglepie.com/api/nodes');
  }
});
