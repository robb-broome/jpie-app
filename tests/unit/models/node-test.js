import { moduleForModel, test } from 'ember-qunit';

moduleForModel('node', 'Unit | Model | node', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});


test('Post is a valid ember-data Model', function (assert) {
  // var store = this.store();
  var node = this.subject({text: 'Text for this node'});
  assert.ok(node);
  assert.ok(node instanceof DS.Model);
  // Ember.run(function() {
  //   post.set('comment', store.createRecord('comment', {}))
  // });

  // set a relationship
  // Ember.run(function() {
  //   post.set('comment', store.createRecord('comment', {}))
  // });

  // assert.ok(post.get('comment'));
  // assert.ok(post.get('comment') instanceof DS.Model);
});
