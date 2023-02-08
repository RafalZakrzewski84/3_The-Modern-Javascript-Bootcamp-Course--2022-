const fs = require('fs');
const path = require('path');
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

			global.global.it = (description, fn) => {
				beforeEaches.forEach((func) => func());
				try {
					fn();
					console.log(`KO - ${description}`);
				} catch (error) {
					console.log(`FAIL - ${description}`);
					console.log(error.message);
				}
			};

			try {
				require(file.name);
			} catch (error) {
				console.log(error);
			}
		}
	}

	async collectFiles(targetPath) {
		const files = await fs.promises.readdir(targetPath);
		for (let file of files) {
			const filePath = path.join(targetPath, file);
			const stats = await fs.promises.lstat(filePath);

			if (stats.isFile() && file.includes('.test.js')) {
				this.testFiles.push({ name: filePath });
			} else if (stats.isDirectory()) {
				const childFiles = await fs.promises.readdir(filePath);
				files.push(...childFiles.map((f) => path.join(file, f)));
			}
		}
	}
}

module.exports = Runner;
