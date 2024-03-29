import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { d as heartPath } from 'ember-mdi/heart';

module('Integration | Component | icons/heart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Icons::Heart />`);

    assert.dom('path').hasAttribute('d', heartPath);
  });

  test('should has subclass', async function (assert) {
    await render(hbs`<Icons::Heart />`);

    assert.dom('svg').hasClass('md-icon-heart');
  });
});
