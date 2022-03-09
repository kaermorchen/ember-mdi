import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import icons from 'ember-mdi/icons';

module('Integration | Component | md-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('icon', 'heart');

    await render(hbs`<MdIcon @icon={{this.icon}}/>`);

    assert.dom('svg').hasClass('md-icon');
    assert.dom('path').hasAttribute('d', icons['heart']);

    this.set('icon', 'bug');
    assert.dom('path').hasAttribute('d', icons['bug']);
  });

  test('should change size', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @size="42" />`);

    assert.dom('svg').hasAttribute('height', '42');
    assert.dom('svg').hasAttribute('width', '42');
  });

  test('should has suctom class', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" class="btn" />`);

    assert.dom('svg').hasClass('btn');
  });

  test('should has spin class', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @spin={{true}} />`);

    assert.dom('svg').hasClass('md-icon-animation-spin');
  });

  test('should has rotate attribute', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @rotate="90" />`);

    assert.dom('svg').hasAttribute('transform', 'rotate(90)');
  });

  test('should has horizontal scale', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @flipH={{true}} />`);

    assert.dom('svg').hasAttribute('transform', 'scale(-1,1)');
  });

  test('should has vertical scale', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @flipV={{true}} />`);

    assert.dom('svg').hasAttribute('transform', 'scale(1,-1)');
  });

  test('should has role attribute', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" role="button" />`);

    assert.dom('svg').hasAttribute('role', 'button');
  });

  test('should has fill attribute', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @fill="green" />`);

    assert.dom('path').hasAttribute('fill', 'green');
  });

  test('should has title', async function (assert) {
    await render(hbs`<MdIcon @icon="bug" @title="I am a bug" />`);

    assert.dom(this.element.querySelector('title')).hasText('I am a bug');
  });
});
