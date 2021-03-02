import MdIcon from './md-icon';

export default class MdiIconComponent extends MdIcon {
  constructor() {
    super(...arguments);

    console.warn(
      '<MdiIcon /> is deprecated. Use <MdIcon /> instead of <MdiIcon />'
    );
  }
}
