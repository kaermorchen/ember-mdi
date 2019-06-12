'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const broccoliAssetRevDefaults = require('broccoli-asset-rev/lib/default-options');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-bootstrap-4': {
      js: null
    },

    fingerprint: {
      enabled: true,
      extensions: broccoliAssetRevDefaults.extensions.concat(['svg']),
      prepend: '/ember-mdi/',
      // FIX: an error: Browser failed to connect within 30s. testem.js not loaded?
      exclude: [
        'testem'
      ]
    },
  });

  app.import('node_modules/@mdi/svg/meta.json', {destDir: ''});

  return app.toTree();
};
