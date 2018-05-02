import test from 'ava';

import anyToKebab from '../any-to-kebab';

test('any-to-kebab', t => {
  t.plan(3);
  t.is(anyToKebab('PascalCase'), 'pascal-case');
  t.is(anyToKebab('camelCase'), 'camel-case');
  t.is(anyToKebab('kebab-case'), 'kebab-case');
});
