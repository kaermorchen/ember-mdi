'use strict';

const svgstore = require('broccoli-svgstore');
const Funnel = require('broccoli-funnel');
const path = require('path');
const defaultOptions = {
  icons: null
};

module.exports = {
  name: require('./package').name,

  treeForPublic() {
    const svgsPath = path.join('node_modules', '@mdi', 'svg', 'svg');
    const options = Object.assign({}, defaultOptions, this.app.options[this.name]);
    const include = Array.isArray(options.icons) ? options.icons.map(item => item + '.svg') : null;

    const publicTree = new Funnel(svgsPath, {
      include
    });

    const svgstoreTree = svgstore(publicTree, {
      outputFile: '/assets/icons.svg'
    });

    return svgstoreTree;
  }
};
