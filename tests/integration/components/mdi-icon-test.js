import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdi-icon', 'Integration | Component | mdi icon', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{mdi-icon "face"}}`);
  assert.equal(this.$('svg').html().trim(), '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons.svg#face"></use>', 'Icon face is correct');

  this.render(hbs`{{mdi-icon icon="bug"}}`);
  assert.equal(this.$('svg').html().trim(), '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons.svg#bug"></use>', 'Icon bug is correct');

  this.render(hbs`{{mdi-icon "bug" size=42}}`);
  assert.equal(this.$('svg').attr('viewBox'), '0 0 42 42', 'viewBox is correct');
  assert.equal(this.$('svg').attr('height'), '42', 'height is correct');
  assert.equal(this.$('svg').attr('width'), '42', 'width is correct');

  this.render(hbs`{{mdi-icon "bug" spin=true}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon-spin'), 'Spin class');

  const rotate = 90;
  this.render(hbs`{{mdi-icon "bug" rotate=90}}`);
  assert.ok(this.$('svg').hasClass(`mdi-icon-rotate-${rotate}`), 'Rotate class');

  this.render(hbs`{{mdi-icon "bug" flipH=true}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon-flip-h'), 'Horizontal flip class');

  this.render(hbs`{{mdi-icon "bug" flipV=true}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon-flip-v'), 'Vertical flip class');

  this.render(hbs`{{mdi-icon "bug" role="icon"}}`);
  assert.equal(this.$('svg').attr('role'), 'icon', 'Role is correct');
});
