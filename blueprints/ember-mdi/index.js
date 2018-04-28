/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function (entityName) {
    return entityName || "ember-mdi";
  },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: '@mdi/svg', target: '2.3.54' }
    ]);
  }
};
