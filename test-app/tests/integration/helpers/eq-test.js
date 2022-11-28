import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | eq', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('val1', '1');
    this.set('val2', '1');

    await render(hbs`{{eq this.val1 this.val2}}`);

    assert.dom(this.element).hasText('true');

    this.set('val1', '1');
    this.set('val2', '2');

    await render(hbs`{{eq this.val1 this.val2}}`);

    assert.dom(this.element).hasText('false');
  });
});
