import clone from '../deep-clone';

describe('deep-clone', () => {
  it('works with objects', () => {
    const obj = { a: 1, b: 2 };

    expect(clone(obj)).not.toBe(obj);
  });

  it('works with arrays', () => {
    const arr = [1, 2, 3];

    expect(clone(arr)).not.toBe(arr);
  });
});
