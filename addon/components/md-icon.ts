import Component from '@glimmer/component';
import icons from 'ember-mdi/icons';

interface MdIconArgs {
  icon: string;
  size: number;
  title: string;
  fill: string;
  role: string;
  spin: boolean;
  flipH: boolean;
  flipV: boolean;
  rotate: number;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'butt' | 'square' | 'round';
  strokeLinejoin: 'miter' | 'round' | 'bevel';
  strokeDasharray: string;
  strokeDashoffset: number;
  strokeOpacity: number;
}

export default class MdIconComponent extends Component<MdIconArgs> {
  get d(): string {
    return icons[this.args.icon];
  }

  get size(): number {
    return this.args.size || 24;
  }

  get role(): string {
    return this.args.role || 'img';
  }

  get transform(): string | null {
    const rotate = this.args.rotate;
    const flipH = this.args.flipH;
    const flipV = this.args.flipV;
    const transform = [];

    if (rotate) {
      transform.push(`rotate(${rotate})`);
    }

    if (flipH && flipV) {
      transform.push('scale(-1,-1)');
    } else if (flipH) {
      transform.push('scale(-1,1)');
    } else if (flipV) {
      transform.push('scale(1,-1)');
    }

    return transform.length ? transform.join(' ') : null;
  }
}
