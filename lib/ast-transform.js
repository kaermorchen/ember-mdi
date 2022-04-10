/* eslint-env node */
'use strict';

class AstTransform {
  constructor(options) {
    this.options = options;
  }

  transform(ast) {
    // this.syntax.traverse(ast, {
    //   BlockStatement: (node) => {
    //     return this._applyTransform(node);
    //   },

    //   MustacheStatement: (node) => {
    //     return this._applyTransform(node);
    //   },
    // });

    return ast;
  }

  _applyTransform(node) {

  }
}

function buildAstTransform(addon) {
  return class extends AstTransform {
    constructor(options) {
      super(options);
      this.addon = addon;
    }
  };
}

module.exports = buildAstTransform;
