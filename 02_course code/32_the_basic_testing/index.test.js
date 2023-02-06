const assert = require('assert');
const { forEach, map } = require('./index.js');

// forEach([1, 2, 3], (value) => {
// 	console.log(value);
// });

// test function:
// 1. move test from global scope, can repeat variables names
// 2. try catch bloke no hang up app
// 3. can pass description to distinguish tests
const test = (description, fn) => {
	console.log('----', description);
	try {
		fn();
	} catch (error) {
		console.log(error.message);
	}
};

test('The forEach function', () => {
	let sum = 0;
	forEach([1, 2, 3], (value) => {
		sum += value;
	});

	//node.js assert
	assert.strictEqual(sum, 6, 'Expected summing array');
});

test('The map function', () => {
	const result = map([1, 2, 3], (value) => {
		return value * 2;
	});

	// assert.strictEqual(result[0], 2);
	// assert.strictEqual(result[1], 4);
	// assert.strictEqual(result[2], 7);
	assert.deepEqual(result, [2, 4, 7]);
});
