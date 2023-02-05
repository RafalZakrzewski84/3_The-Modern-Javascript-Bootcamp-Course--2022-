// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
//     const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//     const array2 = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const card = {
//         value: array1[Math.floor(Math.random() * array1.length)],
//         suit: array2[Math.floor(Math.random() * array2.length)]
//     }
//     return card;

// }

function getCard() {
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    const card = {
        value: value[Math.floor(Math.random() * value.length)],
        suit: suit[Math.floor(Math.random() * suit.length)]
    }
    return card;

}