import Component from '@ember/component';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/mdi-icon';

const mdiIcon = Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['mdi-icon'],
  classNameBindings: ['iconClass', 'spin:mdi-icon-spin'],
  attributeBindings: ['role', 'size:height', 'size:width', 'viewBox', 'transform'],

  size: 24,
  role: 'img',
  icon: null,
  spin: false,
  rotate: null,
  flipH: false,
  flipV: false,
  fill: null,

  init() {
    this._super(...arguments);

    // Require that users pass an icon
    assert('{{mdi-icon}} requires an `icon` to be passed as the value.', isPresent(this.get('icon')));
  },

  iconClass: computed('icon', function() {
    return `mdi-icon-${this.get('icon')}`;
  }),

  viewBox: computed('size', function() {
    const size = this.get('size');

    return `0 0 ${size} ${size}`;
  }),

  transform: computed('rotate', 'flipH', 'flipV', function() {
    const rotate = this.get('rotate');
    const flipH = this.get('flipH');
    const flipV = this.get('flipV');
    let transform = '';

    if (rotate) {
      transform += `rotate(${rotate})`;
    }

    if (flipH && flipV) {
      transform += `scale(-1,-1)`;
    } else if (flipH) {
      transform += `scale(-1,1)`;
    } else if (flipV) {
      transform += `scale(1,-1)`;
    }

    return transform;
  }),
});

mdiIcon.reopenClass({
  positionalParams: ['icon'],
});

export default mdiIcon;
