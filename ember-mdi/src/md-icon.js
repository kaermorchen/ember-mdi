import Component from '@glimmer/component';

export default class MdIcon extends Component {
  get name() {
    return 'md-icon';
  }

  get size() {
    return this.args.size || 24;
  }

  get role() {
    return this.args.role || 'img';
  }

  get fill() {
    return this.args.fill || 'currentColor';
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
