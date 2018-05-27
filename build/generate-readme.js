/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

console.log(
  `${chalk.dim('[UTILS]')} ✏️  Writing ${chalk.blueBright('README.md')}`
);

fs.readdir(path.join(__dirname, '..', 'docs'), (err, possibleDocFiles) => {
  const docFiles = possibleDocFiles.filter(
    fileName => fileName.match(/\.md$/) && fileName !== 'index.md'
  );

  const contents = [
    fs.readFileSync(path.join(__dirname, '..', 'docs', 'index.md'), 'utf-8')
  ]
    .concat(
      docFiles.map(docFile =>
        fs.readFileSync(path.join(__dirname, '..', 'docs', docFile), 'utf-8')
      )
    )
    .join('\n');

  fs.writeFile(path.join(__dirname, '..', 'README.md'), contents, err => {
    if (!err) {
      console.log(
        `${chalk.dim('[UTILS]')} 😊  ${chalk.blueBright('README.md')} written`
      );
    } else {
      console.log(
        `${chalk.dim('[UTILS]')} 👻  ${chalk.red(
          'Error writing'
        )} ${chalk.blueBright('README.md')}`,
        err
      );

      process.exit(1);
    }
  });
});
