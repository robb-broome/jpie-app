import Ember from 'ember';
export default Ember.Route.extend({
  model()  {
    return $.ajax('localhost:3000/api/nodes');
  }
});
