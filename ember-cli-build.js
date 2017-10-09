/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const broccoliAssetRevDefaults = require('broccoli-asset-rev/lib/default-options');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    fingerprint: {
      enabled: true,
      extensions: broccoliAssetRevDefaults.extensions.concat(['svg']),
      prepend: '/ember-mdi/'
    }
  });

  app.import('node_modules/mdi-svg/meta.json', {destDir: ''});

  return app.toTree();
};
