import {test} from 'uvu';
import * as assert from 'uvu/assert';

export default test;

test('unfortunately broken', () => {
  assert.is(2 + 2, 3);
});
