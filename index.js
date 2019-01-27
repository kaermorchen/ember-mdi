'use strict';

var svgstore = require('broccoli-svgstore');
var Funnel = require('broccoli-funnel');
var path = require('path');

const defaultOptions = {
  icons: null
};

module.exports = {
  name: require('./package').name,

  treeForPublic: function () {
    var svgsPath = path.join('node_modules', '@mdi', 'svg', 'svg');
    var options = Object.assign({}, defaultOptions, this.app.options[this.name]);
    var include = Array.isArray(options.icons) ? options.icons.map(item => item + '.svg') : null;

    var publicTree = new Funnel(svgsPath, {
      include
    });

    var svgstoreTree = svgstore(publicTree, {
      outputFile: '/assets/icons.svg'
    });

    return svgstoreTree;
  }
};
