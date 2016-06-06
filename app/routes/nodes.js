import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.find('node');
  }
  // model: function() { return this.store.find('nodes'); }
});
