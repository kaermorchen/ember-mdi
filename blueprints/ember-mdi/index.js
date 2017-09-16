/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function (entityName) {
    return entityName || "ember-mdi";
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'mdi-svg', target: '2.0.46' }
    ]);
  }
};
