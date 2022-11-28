import { helper } from '@ember/component/helper';

export default helper(function eq([value1, value2] /*, named*/) {
  return value1 === value2;
});
