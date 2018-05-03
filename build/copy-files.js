/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '..', 'source'), (err, files) => {
  files.forEach(fileName => {
    fs.copyFileSync(
      path.join(__dirname, '..', 'source', fileName),
      path.join(__dirname, '..', fileName)
    );
  });

  console.log(`😊  ${chalk.blueBright('files copied')}`);
});
