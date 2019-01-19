import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('/ember-mdi/meta.json').then(response => response.json());
  }
});
