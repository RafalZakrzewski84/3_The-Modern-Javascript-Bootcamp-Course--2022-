#!/usr/bin/env node
// npm link

const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
	const results = await runner.collectFiles(process.cwd());
	console.log(results);
};

run();
