import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'test-app/config/environment';
import icons from 'ember-mdi';

export default class ApplicationRoute extends Route {
  async model() {
    const res = await fetch(`${ENV.rootURL}meta.json`).then((res) =>
      res.json()
    );
    const meta = res.map(({ name, tags, aliases }) => {
      return {
        name,
        searchable: `${name} ${tags.join('')} ${aliases.join('')}`.trim(),
      };
    });

    return {
      meta,
      icons,
    };
  }
}
