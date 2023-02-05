console.error("och no!!");
console.log(3 + 3);
if (1 == 1) {
    console.log('true');
}
let rti = 2;
if (rti > 0) {
    console.log('positive');
} else if (rti % 2 !== 0) {
    console.log('odd number');
} else {
    console.log('even numbr');
}

let hscore = 2300;
let pscore = 2100;

if (pscore > hscore) {
    console.log('you beat record');
    hscore = pscore;
    console.log(`new record id ${hscore}`);
} else {
    console.log(`try again your score is ${pscore}`);
}

// EXAMPLE 2
let emoji = 'sad face';

// Switch with overlapping cases...
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}

// Example of TERNARY OPERATOR
// condition ? expIfTrue : expIfFalse
let status = 'online';
let color = status === 'offline' ? 'red' : 'green';

//Arrays

let rarr1 = ['rafal', 12, 'domka'];
rarr1[0] = 'dupa';