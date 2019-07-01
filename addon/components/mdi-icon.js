import Component from '@ember/component';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/mdi-icon';
import icons from 'ember-mdi/icons';

const mdiIcon = Component.extend({
  layout,
  tagName: '',

  title: null,
  size: 24,
  role: 'img',
  icon: null,
  spin: false,
  rotate: null,
  flipH: false,
  flipV: false,

  fill: null,
  stroke: null,
  strokeWidth: null,
  strokeLinecap: null,
  strokeLinejoin: null,
  strokeDasharray: null,
  strokeDashoffset: null,
  strokeOpacity: null,

  init() {
    this._super(...arguments);

    // Require that users pass an icon
    assert('{{mdi-icon}} requires an `icon` to be passed as the value.', isPresent(this.get('icon')));
  },

  d: computed('icon', function() {
    return icons[this.get('icon')];
  }),

  transform: computed('rotate', 'flipH', 'flipV', function() {
    const rotate = this.get('rotate');
    const flipH = this.get('flipH');
    const flipV = this.get('flipV');
    let transform = '';

    if (rotate && rotate !== '0') {
      transform += `rotate(${rotate})`;
    }

    if (flipH && flipV) {
      transform += 'scale(-1,-1)';
    } else if (flipH) {
      transform += 'scale(-1,1)';
    } else if (flipV) {
      transform += 'scale(1,-1)';
    }

    if (transform === '') {
      transform = null;
    }

    return transform;
  }),
});

mdiIcon.reopenClass({
  positionalParams: ['icon'],
});

export default mdiIcon;
