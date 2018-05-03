/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '..'), (err, files) => {
  files.filter(fileName => fileName.endsWith('.js')).forEach(fileName => {
    fs.unlinkSync(path.join(__dirname, '..', fileName));
  });

  console.log(`😊  ${chalk.blueBright('files cleaned')}`);
});
