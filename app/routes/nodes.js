import Ember from 'ember';

export default Ember.Route.extend({
  model()  {
    return Ember.$.getJSON('localhost:3000/api/nodes');
  }
  // model: function() { return this.store.find('nodes'); }
});
