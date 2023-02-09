const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const render = require('./render');

const forbiddenDir = ['node_modules'];
class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTests() {
    for (let file of this.testFiles) {
      console.log(chalk.grey('---- ' + file.fileName));
      const beforeEaches = [];

      global.render = render;
      //implementing beforeEach and it functions
      //global - make that functions are visible in all node files
      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };

      global.it = async (description, fn) => {
        beforeEaches.forEach((func) => func());
        try {
          await fn();
          console.log(chalk.green(`\tKO - ${description}`));
        } catch (error) {
          const message = error.message.replace(/\n/g, '\n\t\t');
          console.log(chalk.red(`\tFAIL - ${description}\n`));
          console.log(chalk.red('\t', message));
        }
      };

      try {
        //run file
        require(file.fullPath);
      } catch (error) {
        console.log(chalk.red(error));
      }
    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);
    for (let file of files) {
      const filePath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filePath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ fullPath: filePath, fileName: file });
      } else if (stats.isDirectory() && !forbiddenDir.includes(file)) {
        const childFiles = await fs.promises.readdir(filePath);
        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
