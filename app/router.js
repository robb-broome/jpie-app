import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('nodes', { path: '/nodes' });
  this.resource('node', { path: '/node/:id' });
  this.route('404',   { path: '/*wildcard' });
});

export default Router;
