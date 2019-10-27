'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {

  });

  app.import('node_modules/@mdi/svg/meta.json', {destDir: ''});

  return app.toTree();
};
