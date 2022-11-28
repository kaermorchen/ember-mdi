import { helper } from '@ember/component/helper';
import { classify } from '@ember/string';

export default helper(function ([str]) {
  return classify(str);
});
