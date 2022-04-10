'use strict';

const fs = require('fs');
const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const resolve = require('resolve');
const buildAstTransform = require('./lib/ast-transform');
const defaultOptions = {
  icons: null,
};

module.exports = {
  name: require('./package').name,

  treeForAddon() {
    console.log('treeForAddon');
    const addonTree = this._super.treeForAddon.apply(this, arguments);
    const svgsPath = path.join(
      this.resolvePackagePath(path.join('@mdi', 'svg')),
      'svg'
    );
    const host = this._findHost();
    const options = Object.assign({}, defaultOptions, host.options[this.name]);
    const list = Array.isArray(options.icons)
      ? options.icons
      : fs.readdirSync(svgsPath).map((item) => path.basename(item, '.svg'));
    const getDRegExp = /<path d="(.+)" \/>/;
    const icons = {};

    list.forEach((item) => {
      let data = fs.readFileSync(path.join(svgsPath, `${item}.svg`));

      icons[item] = getDRegExp.exec(data)[1]; //TODO: find a more simple way
    });

    const babelAddon = this.addons.find(
      (addon) => addon.name === 'ember-cli-babel'
    );

    const iconsFile = writeFile(
      'ember-mdi/icons.js',
      `export default ${JSON.stringify(icons)}`
    );

    const iconsTree = babelAddon.transpileTree(iconsFile, {
      destDir: 'modules',
    });

    return mergeTrees([addonTree, iconsTree]);
  },

  setupPreprocessorRegistry(type, registry) {
    // Skip if we're setting up this addon's own registry
    if (type !== 'parent') {
      return;
    }

    registry.add('htmlbars-ast-plugin', {
      name: 'ember-mdi',
      plugin: buildAstTransform(this),
      baseDir() {
        return __dirname;
      },
      cacheKey() {
        return 'ember-mdi';
      },
    });
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();

    return path.dirname(
      resolve.sync(`${packageName}/package.json`, {
        basedir: host.project.root,
      })
    );
  },
};
