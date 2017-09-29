import Ember from 'ember';
import layout from '../templates/components/mdi-icon';

const { computed } = Ember;

const mdiIcon = Ember.Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['mdi-icon'],
  classNameBindings: ['spin:mdi-icon-spin'],
  attributeBindings: ['role', 'size:height', 'size:width', 'viewBox', 'transform'],

  size: 24,
  role: 'img',
  icon: null,
  spin: false,
  rotate: null,
  flipH: false,
  flipV: false,

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
})

export default mdiIcon;
