import kebabToPascal from '../kebab-to-pascal';

describe('kebab-to-pascal', () => {
  it('works', () => {
    expect(kebabToPascal('kebab-to-pascal')).toBe('KebabToPascal');
  });
});
