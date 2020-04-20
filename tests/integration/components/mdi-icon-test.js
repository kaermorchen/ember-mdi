import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import icons from 'ember-mdi/icons';

module('Integration | Component | mdi icon', function(hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function(assert) {
  //   this.set('icon', 'face');

  //   await render(hbs`<MdiIcon @icon={{this.icon}}/>`);

  //   assert.dom('svg').hasClass('mdi-icon');
  //   assert.dom('path').hasAttribute('d', icons['face']);

  //   this.set('icon', 'bug');
  //   assert.dom('path').hasAttribute('d', icons['bug']);
  // });

  // test('should change size', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" @size="42" />`);

  //   assert.dom('svg').hasAttribute('height', '42');
  //   assert.dom('svg').hasAttribute('width', '42');
  // });

  // test('should has spin class', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" @spin={{true}} />`);

  //   assert.dom('svg').hasClass('mdi-icon-spin');
  // });

  // test('should has rotate attribute', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" rotate="90" />`);

  //   assert.dom('svg').hasAttribute('transform', 'rotate(90)');
  // });

  // test('should has horizontal scale', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" flipH={{true}} />`);

  //   assert.dom('svg').hasAttribute('transform', 'scale(-1,1)');
  // });

  // test('should has vertical scale', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" flipV={{true}} />`);

  //   assert.dom('svg').hasAttribute('transform', 'scale(1,-1)');
  // });

  // test('should has role attribute', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" role="icon" />`);

  //   assert.dom('svg').hasAttribute('role', 'icon');
  // });

  // test('should has fill attribute', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" fill="green" />`);

  //   assert.dom('path').hasAttribute('fill', 'green');
  // });

  // test('should has argument class', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" class="test-class" />`);

  //   assert.dom('svg').hasAttribute('class', /test-class$/);
  // });

  // test('should has title', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" title="I am a bug" />`);

  //   assert.dom(this.element.querySelector('title')).hasText('I am a bug');
  // });
});
