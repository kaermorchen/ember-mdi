import Component from '@glimmer/component';
// import icons from 'ember-mdi/icons';

export default class MdIconComponent extends Component {
  // get d() {
  //   return icons[this.args.icon];
  // }

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
