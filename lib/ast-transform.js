module.exports = function emberMdiPlugin(addon) {
  return function () {
    return {
      name: 'ember-mdi',
      visitor: {
        ElementNode(node) {
          if (node.tag === 'MdIcon') {
            console.log('MdIcon');
          }
        },
      },
    };
  };
};
