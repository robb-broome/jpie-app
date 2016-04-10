import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return { 
      uuid: 'llkadlfkjasdlkj',
      text: 'this is the text'
      };
    // return this.store.findRecord('node', params.id);
  }
});

