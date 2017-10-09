import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  ajax: service(),

  model() {
    return this.get('ajax').request('/ember-mdi/meta.json');
  }
});
