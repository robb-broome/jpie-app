import Ember from 'ember';

// var node_list =  [
//   {"name":"Attend to sparta",
//   "description":"",
//   "started_at":"2016-01-22T19:23:00.000-06:00",
//   "uuid":"000f82e0-5af7-4e57-96d4-4f42ed383184"
// },{
//   "name":"Motorola surfboard modem ",
//   "description":"","started_at":"2014-03-05T17:48:51.264-06:00",
//   "uuid":"001c7fd1-caad-4735-bab6-c54789d2c7d5"
// }, {
//   "name":"Hotfix: fix deploy when no one-off directory",
//   "description":"5e0242a",
//   "started_at":"2013-05-08T17:31:42.633-05:00",
//   "uuid":"00205682-bf80-46c4-a48a-f515ca76aa22"
// }, {
//   "name":"find a gig!",
//   "description":"",
//   "started_at":"2015-10-04T00:00:00.000-05:00",
//   "uuid":"0020aebf-b77f-4140-9b53-3c35cabc7ab2"
//   }];
// export default Ember.Route.extend({
  // model()  {
  //   return node_list;
  // }
//});
export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://jinglepie.com/api/nodes');
  }
});
