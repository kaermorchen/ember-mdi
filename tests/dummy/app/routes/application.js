import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  async model() {
    const response = await fetch('/ember-mdi/meta.json');
    const json = await response.json();

    return json.map(({ name, tags, aliases }) => {
      return {
        name,
        searchable: `${name} ${tags.join('')} ${aliases.join('')}`,
      };
    });
  },
});
