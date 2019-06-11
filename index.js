'use strict';

// const svgstore = require('broccoli-svgstore');
// const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const path = require('path');
const fs = require('fs');
const resolve = require('resolve');
const defaultOptions = {
  icons: null
};

module.exports = {
  name: require('./package').name,

  // treeForPublic() {
  // const svgsPath = path.join('node_modules', '@mdi', 'svg', 'svg');
  // const options = Object.assign({}, defaultOptions, this.app.options[this.name]);
  // const include = Array.isArray(options.icons) ? options.icons.map(item => item + '.svg') : null;

  // const publicTree = new Funnel(svgsPath, {
  //   include
  // });

  // const svgstoreTree = svgstore(publicTree, {
  //   outputFile: '/assets/icons.svg'
  // });

  // return svgstoreTree;
  // },

  included() {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    // let vendorPath = `vendor/${this.name}`;
    // let options = Object.assign({}, defaultOptions, app.options[this.name]);
    const host = this._findHost();

    host.import('vendor/ember-mdi/icons.js');
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
    const iconsTree = writeFile('ember-mdi/icons.js', `export default ${JSON.stringify(icons)}`);
    const transpiledIconsTree = babelAddon.transpileTree(iconsTree);

    return mergeTrees([vendorTree, transpiledIconsTree]);
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: host.project.root }));
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
  }
};
