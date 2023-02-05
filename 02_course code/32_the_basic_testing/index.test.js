const { forEach, map } = require('./index.js');

forEach([1, 2, 3], (value) => {
	console.log(value);
});

let sum = 0;
forEach([1, 2, 3], (value) => {
	sum += value;
});

if (sum !== 6) {
	throw new Error('Expected summing array to equal 6');
} else {
	console.log('Test for forEach passed');
}

const result = map([1, 2, 3], (value) => {
	return value * 2;
});

if (result[0] !== 2) {
	throw new Error(`Expected to find 2, but found ${result[0]}`);
}
if (result[1] !== 4) {
	throw new Error(`Expected to find 2, but found ${result[0]}`);
}
if (result[2] !== 6) {
	throw new Error(`Expected to find 2, but found ${result[0]}`);
} else {
	console.log('Test for map passed');
}
