import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/demo-icon';

export default Component.extend({
  layout,
  classNames: ['demo-icon'],
  classNameBindings: ['isShown::d-none'],

  meta: null,
  searchText: '',

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(this.get('meta.name'));
    }
  },

  isShown: computed('meta', 'searchText', function() {
    const searchText = this.searchText;
    const meta = this.meta;

    if (!meta) {
      return false;
    }

    if (searchText === '') {
      return true;
    }

    if (meta.name.indexOf(searchText) !== -1) {
      return true;
    }

    let hasTag = false;
    for (let i = 0; i < meta.tags.length; i++) {
      if (meta.tags[i].indexOf(searchText) !== -1) {
        hasTag = true;
        break;
      }
    }
    if (hasTag) {
      return true;
    }

    let hasAlias = false;
    for (let i = 0; i < meta.aliases.length; i++) {
      if (meta.aliases[i].indexOf(searchText) !== -1) {
        hasAlias = true;
        break;
      }
    }
    return hasAlias;
  }),
});
