import fs from 'fs';
import path from 'path';
import test from 'ava';

test.cb('imports all utils', t => {
  fs.readdir(path.join(__dirname, '..'), (err, files) => {
    const fileNames = files
      .filter(fileName => fileName.match(/\.js$/) && fileName !== 'index.js')
      .map(fileName => "'./" + fileName.replace('.js', '') + "';");

    fs.readFile(path.join(__dirname, '..', 'index.js'), 'utf8', (err, file) => {
      for (let i = 0; i < fileNames.length; i++) {
        if (file.indexOf(fileNames[i]) === -1) {
          t.fail(`"${fileNames[i]}" is missing`);
          t.end();
          break;
        }
      }

      t.pass('no files missing');
      t.end();
    });
  });
});
