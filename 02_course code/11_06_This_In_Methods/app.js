function sayHi() {
    console.log("HI")
        //this refers to the window (global scope object in the browser)
    console.log(this);
}


const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        //In a method, this refers to the object the method "lives" in:
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last } AKA ${nickName}`;
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
}

const adres = {
    miasto: 'Rumia',
    ulica: 'Dębowa',
    nr: 42,
    kodPocztowy: '84-230',
    fulAdres() {
        const { miasto, ulica, nr } = this;
        return `Twój adres:${miasto}, ${ulica} ${nr}`;
    },
    kodAdres() {
        const fulAdres = this.fulAdres();
        console.log(`${fulAdres}, ${this.kodPocztowy} is your adress!!!`)
    }
}