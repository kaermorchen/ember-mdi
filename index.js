'use strict';

const fs = require('fs');
const path = require('path');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const resolve = require('resolve');
const defaultOptions = {
  icons: null,
};

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    const host = this._findHost();

    host.import('vendor/ember-mdi/icons.js');
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    const svgsPath = path.join(
      this.resolvePackagePath(path.join('@mdi', 'svg')),
      'svg'
    );
    const host = this._findHost();
    const options = Object.assign({}, defaultOptions, host.options[this.name]);
    const list = Array.isArray(options.icons)
      ? options.icons
      : fs.readdirSync(svgsPath).map((item) => item.slice(0, -4));
    const icons = {};

    list.forEach(function (item) {
      const data = fs.readFileSync(path.join(svgsPath, `${item}.svg`));

      icons[item] = /<path d="(.+)" \/>/.exec(data)[1]; //TODO: find a more simple way
    });

    const babelAddon = this.addons.find(
      (addon) => addon.name === 'ember-cli-babel'
    );
    const iconsTree = babelAddon.transpileTree(
      writeFile('ember-mdi/icons.js', `export default ${JSON.stringify(icons)}`)
    );

    trees.push(iconsTree);

    return new BroccoliMergeTrees(trees);
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();

    return path.dirname(
      resolve.sync(`${packageName}/package.json`, {
        basedir: host.project.root,
      })
    );
  },

  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  },
};
