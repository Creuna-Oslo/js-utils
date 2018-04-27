import fs from 'fs';
import path from 'path';

import all from '..';

describe('package', () => {
  it('imports all utils', () => {
    const numberOfKeys = Object.keys(all).length;
    const numberOfFiles = fs
      .readdirSync(path.join(__dirname, '..'))
      .filter(fileName => fileName.match(/\.js$/)).length;

    // Add one because index.js is not exported from itself
    expect(numberOfKeys).toBe(numberOfFiles - 1);
  });
});
