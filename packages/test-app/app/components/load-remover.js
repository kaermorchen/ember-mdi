import Component from '@glimmer/component';

export default class LoadRemoverComponent extends Component {
  constructor() {
    super(...arguments);

    const el = document.querySelector('.loading-indicator');

    if (el) {
      el.parentNode.removeChild(el);
    }
  }
}
