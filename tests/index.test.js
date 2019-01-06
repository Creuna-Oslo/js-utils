import fs from 'fs';
import path from 'path';
import test from 'ava';

test.cb('imports all utils', t => {
  const fileNames = fs
    .readdirSync(path.resolve(__dirname, '..', 'source'))
    .filter(fileName => fileName.match(/\.js$/) && fileName !== 'index.js')
    .map(fileName => "'./" + fileName.replace('.js', '') + "';");

  const indexFile = fs.readFileSync(
    path.resolve(__dirname, '..', 'source', 'index.js'),
    'utf8'
  );

  const missingImports = fileNames
    .filter(fileName => !indexFile.includes(fileName))
    .map(fileName => fileName.replace(';', ''));

  missingImports.length
    ? t.fail(`Missing imports:\n${missingImports.join(',\n')}`)
    : t.pass();
});
