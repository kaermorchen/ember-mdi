import Component from '@glimmer/component';
import icons from 'ember-mdi/icons';

export default class MdIconComponent extends Component {
  get d() {
    return icons[this.args.icon];
  }
}
