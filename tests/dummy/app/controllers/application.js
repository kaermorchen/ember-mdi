import Controller from '@ember/controller';
import { computed, set } from '@ember/object';

const defaultSize = '24';
const defaultRotate = '0';
const defaultStrokeWidth = '0';
const defaultStrokeLinecap = 'butt';
const defaultStrokeLinejoin = 'miter';
const checkIsShown = function(searchText, meta) {
  if (searchText === '') {
    return true;
  }

  if (meta.name.indexOf(searchText) !== -1) {
    return true;
  }


  for (let i = 0; i < meta.tags.length; i++) {
    if (meta.tags[i].indexOf(searchText) !== -1) {
      return true;
    }
  }

  for (let i = 0; i < meta.aliases.length; i++) {
    if (meta.aliases[i].indexOf(searchText) !== -1) {
      return true;
    }
  }

  return false;
}

export default Controller.extend({
  selectedIcon: 'heart',
  size: '120',
  spin: false,
  flipH: false,
  flipV: false,
  rotate: defaultRotate,
  fill: null,
  searchText: '',
  stroke: null,
  strokeWidth: defaultStrokeWidth,
  strokeLinecap: defaultStrokeLinecap,
  strokeLinecapOptions: Object.freeze(['butt', 'round', 'square']),
  strokeLinejoin: defaultStrokeLinejoin,
  strokeLinejoinOptions: Object.freeze(['miter', 'round', 'bevel']),

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

    if (size !== defaultSize) {
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

    if (rotate !== defaultRotate) {
      iconHbsCode += ` rotate=${rotate}`;
    }

    if (fill) {
      iconHbsCode += ` fill="${fill}"`;
    }

    if (stroke) {
      iconHbsCode += ` stroke="${stroke}"`;
    }

    if (strokeWidth !== defaultStrokeWidth) {
      iconHbsCode += ` strokeWidth="${strokeWidth}"`;
    }

    if (strokeLinecap !== defaultStrokeLinecap) {
      iconHbsCode += ` strokeLinecap="${strokeLinecap}"`;
    }

    if (strokeLinejoin !== defaultStrokeLinejoin) {
      iconHbsCode += ` strokeLinejoin="${strokeLinejoin}"`;
    }

    iconHbsCode += '}}';

    return iconHbsCode;
  }),

  actions: {
    updateSearchText(text) {
      const searchText = text.toLowerCase();

      for (let i = 0; i < this.model.length; i++) {
        const item = this.model[i];

        set(item, 'isHidden', !checkIsShown(searchText, item));
      }
    },

    updateSelectedItem(event) {
      const iconWrapper = event.target.closest('.demo-icon');

      if (iconWrapper && iconWrapper.dataset.name) {
        this.set('selectedIcon', iconWrapper.dataset.name);
      }
    }
  }
});
