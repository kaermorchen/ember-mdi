import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | classify', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('value', 'text_one');
    await render(hbs`{{classify this.value}}`);
    assert.dom(this.element).hasText('TextOne');

    this.set('value', 'text-two');
    await render(hbs`{{classify this.value}}`);
    assert.dom(this.element).hasText('TextTwo');

    this.set('value', 'textThree');
    await render(hbs`{{classify this.value}}`);
    assert.dom(this.element).hasText('TextThree');
  });
});
