import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
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
    const searchText = this.get('searchText').toLowerCase();
    const meta = this.get('meta');
    const icon = meta.name;

    if (isEmpty(searchText)) {
      return true;
    }

    if (icon.indexOf(searchText) !== -1) {
      return true;
    }

    if (!meta) {
      return false;
    }

    const hasTag = A(meta.tags).any(function(item) {
      return item.indexOf(searchText) !== -1;
    });

    const hasAlias = A(meta.aliases).any(function(item) {
      return item.indexOf(searchText) !== -1;
    });

    return hasTag || hasAlias;
  }),
});
