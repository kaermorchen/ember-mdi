import Ember from 'ember';
import layout from '../templates/components/mdi-icon';

const mdiIcon = Ember.Component.extend({
  layout,
  tagName: 'svg',
  classNames: ['mdi-icon'],
  attributeBindings: ['role'],

  role: 'img',
  icon: null
});

mdiIcon.reopenClass({
  positionalParams: ['icon'],
})

export default mdiIcon;
