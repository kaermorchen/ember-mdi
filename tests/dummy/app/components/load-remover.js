import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  didInsertElement() {
    this._super(...arguments);

    const el = document.querySelector('.loading-indicator');

    if (el) {
      el.parentNode.removeChild(el);
    }
  },
});
