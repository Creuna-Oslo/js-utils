import test from 'ava';

import kebabToCamel from '../kebab-to-camel';

test('kebab-to-camel', t => {
  t.is(kebabToCamel('kebab-to-camel'), 'kebabToCamel');
});
