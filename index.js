'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const path = require('path');
const fs = require('fs');
const resolve = require('resolve');
const defaultOptions = {
  icons: null
};

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/ember-mdi/icons.js');
  },

  treeForVendor(vendorTree) {
    const svgsPath = path.join('node_modules', '@mdi', 'svg', 'svg');
    const host = this._findHost();
    const options = Object.assign({}, defaultOptions, host.options[this.name]);
    const list = Array.isArray(options.icons) ? options.icons : fs.readdirSync(svgsPath).map(item => item.slice(0, -4));
    const icons = {};

    list.forEach(function (item) {
      const data = fs.readFileSync(path.join(svgsPath, `${item}.svg`));

      icons[item] = /(?<=<path d=")(.+)(?=" \/\>)/.exec(data)[0]; //TODO: find a more simple way
    });

    const babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');
    const iconsTree = babelAddon.transpileTree(writeFile('ember-mdi/icons.js', `export default ${JSON.stringify(icons)}`));

    return new BroccoliMergeTrees([vendorTree, iconsTree]);
  },
};
