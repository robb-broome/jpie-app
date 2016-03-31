export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('node', params.id);
  }
});

