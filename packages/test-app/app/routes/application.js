import Route from '@ember/routing/route';
import ENV from 'test-app/config/environment';

export default class ApplicationRoute extends Route {
  async model() {
    const response = await fetch(`${ENV.rootURL}meta.json`);
    const json = await response.json();

    return json.map(({ name, tags, aliases }) => {
      return {
        name,
        searchable: `${name} ${tags.join('')} ${aliases.join('')}`,
      };
    });
  }
}
