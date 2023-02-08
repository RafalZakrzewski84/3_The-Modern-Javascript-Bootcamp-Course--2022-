const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const forbiddenDir = ['node_modules'];
class Runner {
	constructor() {
		this.testFiles = [];
	}

	async runTests() {
		for (let file of this.testFiles) {
			const beforeEaches = [];
			//implementing beforeEach and it functions
			//global - make that functions are visible in all node files
			global.beforeEach = (fn) => {
				beforeEaches.push(fn);
			};

			global.it = (description, fn) => {
				console.log(chalk.grey('----' + file.fileName));
				beforeEaches.forEach((func) => func());
				try {
					fn();
					console.log(chalk.green(`\tKO - ${description}\n`));
				} catch (error) {
					const message = error.message.replace(/\n/g, '\n\t\t');
					console.log(chalk.red(`\tFAIL - ${description}\n`));
					console.log(chalk.red('\t', message));
				}
			};

			try {
				require(file.name);
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
				this.testFiles.push({ name: filePath, fileName: file });
			} else if (stats.isDirectory() && !forbiddenDir.includes(file)) {
				const childFiles = await fs.promises.readdir(filePath);
				files.push(...childFiles.map((f) => path.join(file, f)));
			}
		}
	}
}

module.exports = Runner;
