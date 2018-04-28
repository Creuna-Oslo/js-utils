import test from 'ava';

import kebabToPascal from '../kebab-to-pascal';

test('kebab-to-pascal', t => {
  t.is(kebabToPascal('kebab-to-pascal'), 'KebabToPascal');
});
