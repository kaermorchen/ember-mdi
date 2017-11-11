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
  strokeWidth: '0',
  strokeLinecap: 'butt',
  strokeLinecapOptions: ['butt', 'round', 'square'],
  strokeLinejoin: 'miter',
  strokeLinejoinOptions: ['miter', 'round', 'bevel'],

  iconHbsCode: computed('selectedIcon', 'size', 'spin', 'flipH', 'flipV', 'rotate', 'fill', 'stroke', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', function () {
    const selectedIcon = this.get('selectedIcon');
    const size = this.get('size');
    const spin = this.get('spin');
    const flipH = this.get('flipH');
    const flipV = this.get('flipV');
    const rotate = this.get('rotate');
    const fill = this.get('fill');
    const stroke = this.get('stroke');
    const strokeWidth = this.get('strokeWidth');
    const strokeLinecap = this.get('strokeLinecap');
    const strokeLinejoin = this.get('strokeLinejoin');

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

    if (strokeWidth !== '0') {
      iconHbsCode += ` strokeWidth="${strokeWidth}"`;
    }

    if (strokeLinecap !== 'butt') {
      iconHbsCode += ` strokeLinecap="${strokeLinecap}"`;
    }

    if (strokeLinejoin !== 'miter') {
      iconHbsCode += ` strokeLinejoin="${strokeLinejoin}"`;
    }

    iconHbsCode += '}}';

    return iconHbsCode;
  })
});
