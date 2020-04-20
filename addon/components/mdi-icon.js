import MdIcon from './md-icon';

export default class MdiIconComponent extends MdIcon {
  constructor() {
    super(...arguments);
    console.warn('<MdiIcon /> is depricated. Use <MdIcon /> instead of <MdiIcon />');
  }
}
