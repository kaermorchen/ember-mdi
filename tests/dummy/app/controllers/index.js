import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  selectedIcon: 'access-point',
  size: '24',
  spin: false,
  flipH: false,
  flipV: false,
  rotate: '0',
  fill: null,
  searchText: '',
  stroke: null,
  strokeWidth: 0,

  iconHbsCode: computed('selectedIcon', 'size', 'spin', 'flipH', 'flipV', 'rotate', 'fill', 'stroke', 'strokeWidth', function () {
    const selectedIcon = this.get('selectedIcon');
    const size = this.get('size');
    const spin = this.get('spin');
    const flipH = this.get('flipH');
    const flipV = this.get('flipV');
    const rotate = this.get('rotate');
    const fill = this.get('fill');
    const stroke = this.get('stroke');
    const strokeWidth = this.get('strokeWidth');

    let iconHbsCode = `{{mdi-icon "${selectedIcon}"`;

    if (size !== '24') {
      iconHbsCode += ` size=${size}`;
    }

    if (spin) {
      iconHbsCode += ` spin=${spin}`;
    }

    if (flipH) {
      iconHbsCode += ` flipH=${flipH}`;
    }

    if (flipV) {
      iconHbsCode += ` flipH=${flipV}`;
    }

    if (rotate !== '0') {
      iconHbsCode += ` rotate=${rotate}`;
    }

    if (fill) {
      iconHbsCode += ` fill="${fill}"`;
    }

    if (stroke) {
      iconHbsCode += ` stroke="${stroke}"`;
    }

    if (strokeWidth) {
      iconHbsCode += ` stroke="${strokeWidth}"`;
    }

    iconHbsCode += '}}';

    return iconHbsCode;
  })
});
