import { Submarine } from 'ember-mdi';

function Yellow(BaseClass) {
  return class extends BaseClass {
    get fill() {
      return 'yellow';
    }
  };
}

export default Yellow(Submarine);
