import fs from 'fs';
import path from 'path';
import test from 'ava';

import kebabToCamel from '../source/kebab-to-camel';

test('documents all modules', t => {
  const readme = fs.readFileSync(path.resolve(__dirname, '..', 'README.md'));

  const missingFiles = fs
    .readdirSync(path.resolve(__dirname, '..', 'source'))
    .filter(fileName => fileName.match(/\.js$/) && fileName !== 'index.js')
    .map(fileName => kebabToCamel(fileName.replace('.js', '')))
    .filter(moduleName => !readme.includes(moduleName));

  missingFiles.length
    ? t.fail(`Readme does not include [${missingFiles.join(', ')}]`)
    : t.pass();
});

test.cb('has no [TODO]s', t => {
  fs.readFile(
    path.join(__dirname, '..', 'README.md'),
    'utf8',
    (err, readme) => {
      if (!readme) {
        t.fail("Can't find `README.md`");
        t.end();
        return;
      }

      if (readme.includes('[TODO]')) {
        t.fail(`README has [TODO]s.`);
        t.end();
        return;
      }

      t.pass();
      t.end();
    }
  );
});
