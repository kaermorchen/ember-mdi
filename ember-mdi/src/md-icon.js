import Component from '@glimmer/component';
import './styles.css';

function toKebabCase(str) {
  let newStr = str[0].toLowerCase();
  for (let i = 1, l = str.length, ch = str[i]; i < l; i++, ch = str[i]) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      newStr += `-${ch.toLowerCase()}`;
    } else {
      newStr += ch;
    }
  }
  return newStr;
}

export default class MdIcon extends Component {
  get subClass() {
    return `md-icon-${toKebabCase(this.constructor.name)}`;
  }

  get size() {
    return this.args.size || 24;
  }

  get role() {
    return this.args.role || 'img';
  }

  get transform() {
    const rotate = this.args.rotate;
    const flipH = this.args.flipH;
    const flipV = this.args.flipV;
    let transform = '';

    if (rotate && rotate !== '0') {
      transform += `rotate(${rotate})`;
    }

    if (flipH && flipV) {
      transform += 'scale(-1,-1)';
    } else if (flipH) {
      transform += 'scale(-1,1)';
    } else if (flipV) {
      transform += 'scale(1,-1)';
    }

    if (transform === '') {
      transform = null;
    }

    return transform;
  }
}
