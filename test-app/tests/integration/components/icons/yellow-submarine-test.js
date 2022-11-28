import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icons/yellow-submarine ', function (hooks) {
  setupRenderingTest(hooks);

  test('it mixed', async function (assert) {
    await render(hbs`<Icons::YellowSubmarine />`);

    assert.dom('svg').hasAttribute('fill', 'yellow');
  });
});
