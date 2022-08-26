import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class MdIcon extends Component {
  animateSpin = modifier((element, [spin]) => {
    const currentAnimations = element.getAnimations();
    const spinAnimation = currentAnimations.find((item) => item.id === 'spin');

    if (spin) {
      if (spinAnimation) {
        return;
      }

      const animation = element.animate([{ transform: 'rotate(360deg)' }], {
        duration: this.spinDuration,
        iterations: this.spinIterations,
      });

      animation.id = 'spin';

      return () => {
        animation.cancel();
      };
    } else if (!spin && spinAnimation) {
      spinAnimation.cancel();
    }
  });

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

  get spinDuration() {
    return this.args.spinDuration || 650;
  }

  get spinIterations() {
    return this.args.spinIterations || Infinity;
  }
}
