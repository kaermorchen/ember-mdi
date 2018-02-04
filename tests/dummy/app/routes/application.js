import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  model() {
    return this.get('ajax').request('/ember-mdi/meta.json').then(meta => {
      const obj = {};

      meta.forEach(item => {
        obj[item.name] = item;
      });

      return obj;
    });
  }
});
