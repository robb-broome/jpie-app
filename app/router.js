import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('nodes');
  this.route('node', { path: 'nodes/:id' });
  this.route('404', { path: '/*wildcard' });
});

export default Router;
