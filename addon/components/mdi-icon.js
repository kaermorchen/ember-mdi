import Ember from 'ember';
import layout from '../templates/components/mdi-icon';

const mdiIcon = Ember.Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['mdi-icon'],
  classNameBindings: ['spin:mdi-icon-spin'],
  attributeBindings: ['role'],

  role: 'img',
  icon: null,
  spin: false
});

mdiIcon.reopenClass({
  positionalParams: ['icon'],
})

export default mdiIcon;
