/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

console.log(`${chalk.dim('[UTILS]')} ✏️  Writing missing documentation files`);

fs.readdir(path.join(__dirname, '..', 'source'), (err, possibleScriptFiles) => {
  const scriptFiles = possibleScriptFiles.filter(
    fileName => fileName.match(/\.js$/) && fileName !== 'index.js'
  );

  fs.readdir(path.join(__dirname, '..', 'docs'), (err, possibleDocFiles) => {
    const docFiles = possibleDocFiles
      .filter(fileName => fileName.match(/\.md$/))
      .reduce(
        (accumulator, docFile) =>
          Object.assign({}, accumulator, {
            [docFile]: docFile
          }),
        {}
      );

    const missingDocFiles = scriptFiles.reduce((accumulator, scriptFile) => {
      const docFile = scriptFile.replace('.js', '.md');
      if (!docFiles[docFile]) {
        accumulator.push(docFile);
      }

      return accumulator;
    }, []);

    if (missingDocFiles.length === 0) {
      console.log(
        `${chalk.dim('[UTILS]')} 😊  No missing documentation files to write`
      );
    } else {
      missingDocFiles.forEach(missingDocFile => {
        fs.writeFile(
          path.join(__dirname, '..', 'docs', missingDocFile),
          `### [TODO] Write documentation for ${missingDocFile.replace(
            '.md',
            '.js'
          )}`,
          err => {
            if (!err) {
              console.log(
                `${chalk.dim('[UTILS]')} 😊  ${chalk.blueBright(
                  missingDocFile
                )} written`
              );
            } else {
              console.log(
                `${chalk.dim('[UTILS]')} 👻  ${chalk.red(
                  'Error writing'
                )} ${chalk.blueBright(missingDocFile)}`,
                err
              );

              process.exit(1);
            }
          }
        );
      });
    }
  });
});
