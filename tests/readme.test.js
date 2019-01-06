import fs from 'fs';
import path from 'path';
import test from 'ava';

import kebabToCamel from '../source/kebab-to-camel';

test('documents all modules', t => {
  const readme = fs.readFileSync(path.resolve(__dirname, '..', 'README.md'));

  const sourceFiles = fs
    .readdirSync(path.resolve(__dirname, '..', 'source'))
    .filter(fileName => fileName.match(/\.js$/) && fileName !== 'index.js')
    .map(fileName => kebabToCamel(fileName.replace('.js', '')))
    .forEach(moduleName => {
      if (!readme.includes(moduleName)) {
        t.fail(`README does not include "${moduleName}".`);
        return;
      }
    });

  t.pass();
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
