// Functions
function makeDeck() {
    const deck = []
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop()
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);


// Functions in objects

const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    drawnCards: [],
    makeDeck() {
        const { deck, suits, values } = this;
        for (let value of this.values.split(',')) {
            for (let suit of this.suits) {
                this.deck.push({
                    value,
                    suit
                })
            }
        }

    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(arr) {
        const cards = [];
        for (let i = 0; i < arr; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const { deck } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}