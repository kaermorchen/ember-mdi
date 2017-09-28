import Ember from 'ember';
import layout from '../templates/components/mdi-icon';

const { isPresent, computed } = Ember;

const mdiIcon = Ember.Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['mdi-icon'],
  classNameBindings: ['spin:mdi-icon-spin', 'flipH:mdi-icon-flip-h', 'flipV:mdi-icon-flip-v'],
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

  transform: computed('rotate', function() {
    const rotate = this.get('rotate');

    return isPresent(rotate) ? `rotate(${rotate})` : null;
  }),
});

mdiIcon.reopenClass({
  positionalParams: ['icon'],
})

export default mdiIcon;
