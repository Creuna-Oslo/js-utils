import kebabToCamel from '../kebab-to-camel';

describe('kebab-to-camel', () => {
  it('works', () => {
    expect(kebabToCamel('kebab-to-camel')).toBe('kebabToCamel');
  });
});
