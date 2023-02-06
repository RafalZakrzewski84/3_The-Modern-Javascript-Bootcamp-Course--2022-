/** @format */

//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function () {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [6, 7, 8, 9];
//we can overwrite prototype methods
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

//this is referring to item using method
Array.prototype.show = function () {
	console.log('This is:', this);
	let total = 0;
	for (let num of this) {
		total += num;
	}
	return total;
};

//example
[1, 2, 3].show(); //this in show method is [1,2,3]

//Implement map on a Prototype
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	const newArray = [];
	for (let item of this) {
		newArray.push(callback(item));
	}
	console.log(newArray);
	return newArray;
};

const new_s_map = s.myMap(function (item) {
	return item * 2;
}); //[ 46, 130, 196, 10 ]

//Implement the filter Method on a Prototype
Array.prototype.myFilter = function (callback) {
	const newArray = [];
	for (let item of this) {
		if (callback(item)) {
			newArray.push(item);
		}
	}
	return newArray;
};

const new_s_filter = s.myFilter(function (item) {
	return item % 2 === 1;
}); //[ 23, 65, 5 ]
