import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import Component from '@ember/component';
import layout from '../templates/components/demo-icon';

export default Component.extend({
  layout,
  classNames: ['demo-icon'],
  classNameBindings: ['isShown::d-none'],

  icon: null,
  meta: null,
  searchText: '',

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(this.get('icon'));
    }
  },

  isShown: computed('icon', 'meta', 'searchText', function() {
    const searchText = this.get('searchText').toLowerCase();
    const icon = this.get('icon');
    const meta = this.get('meta');

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
