'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {});

  app.import('node_modules/@mdi/svg/meta.json', { destDir: '' });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
