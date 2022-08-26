import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | md-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('should change size', async function (assert) {
    await render(hbs`<MdIcon @size="42" />`);

    assert.dom('svg').hasAttribute('height', '42');
    assert.dom('svg').hasAttribute('width', '42');
  });

  test('should has md-icon class', async function (assert) {
    await render(hbs`<MdIcon />`);

    assert.dom('svg').hasClass('md-icon');
  });

  test('should has custom class', async function (assert) {
    await render(hbs`<MdIcon class="btn" />`);

    assert.dom('svg').hasClass('btn');
  });

  test('should has spin class', async function (assert) {
    await render(hbs`<MdIcon @spin={{true}} />`);

    assert.dom('svg').hasClass('md-icon-animation-spin');
  });

  test('should has rotate attribute', async function (assert) {
    await render(hbs`<MdIcon @rotate="90" />`);

    assert.dom('svg').hasAttribute('transform', 'rotate(90)');
  });

  test('should has horizontal scale', async function (assert) {
    await render(hbs`<MdIcon @flipH={{true}} />`);

    assert.dom('svg').hasAttribute('transform', 'scale(-1,1)');
  });

  test('should has vertical scale', async function (assert) {
    await render(hbs`<MdIcon @flipV={{true}} />`);

    assert.dom('svg').hasAttribute('transform', 'scale(1,-1)');
  });

  test('should has role attribute', async function (assert) {
    await render(hbs`<MdIcon role="button" />`);

    assert.dom('svg').hasAttribute('role', 'button');
  });

  test('should has fill attribute', async function (assert) {
    await render(hbs`<MdIcon />`);

    assert.dom('svg').hasAttribute('fill', 'currentColor');
  });

  test('should change fill attribute', async function (assert) {
    await render(hbs`<MdIcon @fill="green" />`);

    assert.dom('svg').hasAttribute('fill', 'green');
  });

  test('should has title', async function (assert) {
    await render(hbs`<MdIcon @title="I am a bug" />`);

    assert.dom(this.element.querySelector('title')).hasText('I am a bug');
  });
});
