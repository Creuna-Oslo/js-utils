import fs from 'fs';
import path from 'path';
import test from 'ava';

test.cb('imports all utils', t => {
  fs.readdir(path.join(__dirname, '..', 'source'), (err, files) => {
    const fileNames = files
      .filter(fileName => fileName.match(/\.js$/) && fileName !== 'index.js')
      .map(fileName => "'./" + fileName.replace('.js', '') + "';");

    fs.readFile(
      path.join(__dirname, '..', 'source', 'index.js'),
      'utf8',
      (err, file) => {
        if (!file) {
          t.fail("Can't find `index.js`");
          t.end();
          return;
        }

        const missingImports = fileNames
          .filter(fileName => file.indexOf(fileName) === -1)
          .map(fileName => `"${fileName}"`);

        if (missingImports.length > 0) {
          t.fail(
            `${missingImports.join(', ')} ${
              missingImports.length > 1 ? 'are' : 'is'
            } missing`
          );
          t.end();
          return;
        }

        t.pass();
        t.end();
      }
    );
  });
});
