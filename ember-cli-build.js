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

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
