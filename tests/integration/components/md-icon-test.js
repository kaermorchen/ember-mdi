import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import icons from 'ember-mdi/icons';

module('Integration | Component | md-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('icon', 'face');

    await render(hbs`<MdIcon @icon={{this.icon}}/>`);

    assert.dom('svg').hasClass('md-icon');
    assert.dom('path').hasAttribute('d', icons['face']);

    this.set('icon', 'bug');
    assert.dom('path').hasAttribute('d', icons['bug']);
  });

  // test('should change size', async function(assert) {
  //   await render(hbs`<MdiIcon @icon="bug" @size="42" />`);

  //   assert.dom('svg').hasAttribute('height', '42');
  //   assert.dom('svg').hasAttribute('width', '42');
  // });
});
