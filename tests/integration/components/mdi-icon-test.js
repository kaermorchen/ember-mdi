import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import icons from 'ember-mdi/icons';

module('Integration | Component | mdi icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('icon', 'face');

    await render(hbs`{{mdi-icon icon=icon}}`);

    assert.dom('svg').hasClass('mdi-icon');
    assert.dom('path').hasAttribute('d', icons['face']);

    this.set('icon', 'bug');
    assert.dom('path').hasAttribute('d', icons['bug']);
  });

  test('should has icon class', async function(assert) {
    await render(hbs`{{mdi-icon "alert"}}`);

    assert.dom('svg').hasClass('mdi-icon-alert');
  });

  test('should change size', async function(assert) {
    await render(hbs`{{mdi-icon "bug" size=42}}`);

    assert.dom('svg').hasAttribute('height', '42');
    assert.dom('svg').hasAttribute('width', '42');
  });

  test('should has spin class', async function(assert) {
    await render(hbs`{{mdi-icon "bug" spin=true}}`);

    assert.dom('svg').hasClass('mdi-icon-spin');
  });

  test('should has rotate attribute', async function(assert) {
    await render(hbs`{{mdi-icon "bug" rotate=90}}`);

    assert.dom('svg').hasAttribute('transform', 'rotate(90)');
  });

  test('should has horizontal scale', async function(assert) {
    await render(hbs`{{mdi-icon "bug" flipH=true}}`);

    assert.dom('svg').hasAttribute('transform', 'scale(-1,1)');
  });

  test('should has vertical scale', async function(assert) {
    await render(hbs`{{mdi-icon "bug" flipV=true}}`);

    assert.dom('svg').hasAttribute('transform', 'scale(1,-1)');
  });

  test('should has role attribute', async function(assert) {
    await render(hbs`{{mdi-icon "bug" role="icon"}}`);

    assert.dom('svg').hasAttribute('role', 'icon');
  });

  test('should has fill attribute', async function(assert) {
    await render(hbs`{{mdi-icon "bug" fill="green"}}`);

    assert.dom('path').hasAttribute('fill', 'green');
  });

  test('should has argument class', async function(assert) {
    await render(hbs`{{mdi-icon "bug" class="test-class"}}`);

    assert.dom('svg').hasAttribute('class', /test-class$/);
  });

  test('should has title', async function(assert) {
    await render(hbs`{{mdi-icon "bug" title="I am a bug"}}`);

    assert.dom(this.element.querySelector('title')).hasText('I am a bug');
  });
});
