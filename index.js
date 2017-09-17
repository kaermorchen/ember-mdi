/* eslint-env node */
'use strict';

var svgstore = require('broccoli-svgstore');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var path = require('path');

module.exports = {
  name: 'ember-mdi',

  isDevelopingAddon: function () {
    return true;
  },

  treeForPublic: function () {
    var svgsPath = path.join('node_modules', 'mdi-svg', 'svg');

    var publicTree = new Funnel(svgsPath, {
      // include: [
      //   'access-point.svg',
      //   'access-point-network.svg'
      // ]
    });

    var svgstoreTree = svgstore(publicTree, {
      outputFile: '/assets/icons.svg'
    });

    return svgstoreTree;
  }
};
