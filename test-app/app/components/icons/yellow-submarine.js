import { Submarine } from 'ember-mdi';

function Yellow(BaseClass) {
  return class extends BaseClass {
    get fill() {
      return 'yellow';
    }
  };
}

class NormalSubmarine extends Submarine {}

export default Yellow(NormalSubmarine);
