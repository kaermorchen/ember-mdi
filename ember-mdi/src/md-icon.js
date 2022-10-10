import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { array, hash } from '@ember/helper';
import animate from 'ember-animation/modifiers/animate';

class MdIcon extends Component {
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
}

const TEMPLATE = precompileTemplate(
  `<svg
  class='md-icon md-icon-{{this.name}}'
  width={{this.size}}
  height={{this.size}}
  viewBox='0 0 24 24'
  transform={{this.transform}}
  role={{this.role}}
  fill={{this.fill}}
  ...attributes
  {{(if
    @spin
    (animate
      (hash transform=(array 'rotate(0)' 'rotate(360deg)'))
      (hash duration=this.spinDuration)
    )
  )}}
  >
  {{#if @title~}}
    <title>
      {{~@title~}}
    </title>
  {{~/if}}
  <path
    d={{this.d}}
    stroke={{@stroke}}
    stroke-width={{@strokeWidth}}
    stroke-linecap={{@strokeLinecap}}
    stroke-linejoin={{@strokeLinejoin}}
    stroke-dasharray={{@strokeDasharray}}
    stroke-dashoffset={{@strokeDashoffset}}
    stroke-opacity={{@strokeOpacity}}
  />
</svg>
`,
  {
    strictMode: true,
    scope: () => ({ animate, hash, array }),
  }
);

setComponentTemplate(TEMPLATE, MdIcon);

export { MdIcon as default };
