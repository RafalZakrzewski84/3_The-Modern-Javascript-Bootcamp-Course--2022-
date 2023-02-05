// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    // Using the new shorthand property syntax:
    return {
        max,
        min,
        sum,
        avg
    }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

function pick(arr) {
    //return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const value = pick(values);
    const suit = pick(suits)
    return {
        value,
        suit
    };
}


//my examples
const circleData = (r) => {
    const pi = 3.14;
    const area = pi * r * r;
    const circumference = 2 * pi * r;
    const diameter = 2 * r;
    const radius = Math.sqrt(area / pi);
    return {
        area,
        circumference,
        diameter,
        radius
    }

}

const circle = circleData(10);