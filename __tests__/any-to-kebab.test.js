import anyToKebab from '../any-to-kebab';

describe('any-to-kebab', () => {
  it('works', () => {
    expect(anyToKebab('PascalCase')).toBe('pascal-case');
    expect(anyToKebab('camelCase')).toBe('camel-case');
    expect(anyToKebab('kebab-case')).toBe('kebab-case');
  });
});
