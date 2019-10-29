/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName(entityName) {
    return entityName || "ember-mdi";
  },

  afterInstall() {
    return this.addPackagesToProject([
      { name: '@mdi/svg', target: '^4.0.0' }
    ]);
  }
};
