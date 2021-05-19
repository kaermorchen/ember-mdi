import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const defaultSize = '24';
const defaultRotate = '0';
const defaultStrokeWidth = '0';
const defaultStrokeLinecap = 'butt';
const defaultStrokeLinejoin = 'miter';
const checkIsShown = function (searchText, meta) {
  if (searchText === '') {
    return true;
  }

  if (meta.searchable.indexOf(searchText) !== -1) {
    return true;
  }

  return false;
};

export default class ApplicationController extends Controller {
  @tracked selectedIcon = 'heart';
  @tracked size = '120';
  @tracked spin = false;
  @tracked flipH = false;
  @tracked flipV = false;
  @tracked rotate = defaultRotate;
  @tracked fill = null;
  @tracked searchText = '';
  @tracked stroke = null;
  @tracked strokeWidth = defaultStrokeWidth;
  @tracked strokeLinecap = defaultStrokeLinecap;
  @tracked strokeLinecapOptions = Object.freeze(['butt', 'round', 'square']);
  @tracked strokeLinejoin = defaultStrokeLinejoin;
  @tracked strokeLinejoinOptions = Object.freeze(['miter', 'round', 'bevel']);

  @tracked search;
  @tracked emptyResults = false;

  get iconHbsCode() {
    let iconHbsCode = `<MdIcon @icon="${this.selectedIcon}"`;

    if (this.size !== defaultSize) {
      iconHbsCode += ` @size=${this.size}`;
    }

    if (this.spin) {
      iconHbsCode += ` @spin=${this.spin}`;
    }

    if (this.flipH) {
      iconHbsCode += ` @flipH=${this.flipH}`;
    }

    if (this.flipV) {
      iconHbsCode += ` @flipH=${this.flipV}`;
    }

    if (this.rotate !== defaultRotate) {
      iconHbsCode += ` @rotate=${this.rotate}`;
    }

    if (this.fill) {
      iconHbsCode += ` @fill="${this.fill}"`;
    }

    if (this.stroke) {
      iconHbsCode += ` @stroke="${this.stroke}"`;
    }

    if (this.strokeWidth !== defaultStrokeWidth) {
      iconHbsCode += ` @strokeWidth="${this.strokeWidth}"`;
    }

    if (this.strokeLinecap !== defaultStrokeLinecap) {
      iconHbsCode += ` @strokeLinecap="${this.strokeLinecap}"`;
    }

    if (this.strokeLinejoin !== defaultStrokeLinejoin) {
      iconHbsCode += ` @strokeLinejoin="${this.strokeLinejoin}"`;
    }

    iconHbsCode += '/>';

    return iconHbsCode;
  }

  @action
  updateStrokeLinecap(event) {
    this.strokeLinecap = event.target.value;
  }

  @action
  updateStrokeLinejoin(event) {
    this.strokeLinejoin = event.target.value;
  }

  @action
  async updateSearchText(value, signal) {
    await new Promise(resolve => setTimeout(resolve, 190));

    if (signal.aborted) {
      return;
    }

    this.search = value;
    const lowcased = value.toLowerCase();

    for (let i = 0; i < this.model.length; i++) {
      const item = this.model[i];

      set(item, 'isHidden', !checkIsShown(lowcased, item));
    }

    this.emptyResults = this.model.every(({ isHidden }) => isHidden);
  }

  @action
  debouncedUpdate(event) {
    if (this.ctrl) {
      this.ctrl.abort();
    }

    this.ctrl = new AbortController();

    this.updateSearchText(event.target.value, this.ctrl.signal);
  }

  @action
  updateSelectedItem(event) {
    const iconWrapper = event.target.closest('.demo-icon');

    if (iconWrapper && iconWrapper.dataset.name) {
      this.selectedIcon = iconWrapper.dataset.name;
    }
  }
}
