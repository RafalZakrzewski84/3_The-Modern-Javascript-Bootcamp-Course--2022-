// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('IT WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

//chaining XML
//deklaracja zapytania
const planetReq = new XMLHttpRequest();

//zpytanie przy zaladowaniu strony
planetReq.addEventListener('load', function() {
    console.log('It worked!!!');

    //responseText - to dane z API prsowane z JSONa i przypisae do zmiennej
    const data = JSON.parse(this.responseText);
    console.log(data);

    //wypisanie nazw planet
    for (let planet of data.results) {
        console.log(planet.name);
    }

    //wypisanie co zawiera ta funckcja
    console.log(this)

    //url do filmu z poprzedniego zapytania
    const filmUrl = data.results[0].films[0];
    console.log(filmUrl);

    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function() {
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
        console.log(this)
    });
    filmReq.addEventListener('error', (e) => {
        console.log('film error: ', e)
    });
    filmReq.open('GET', filmUrl);
    filmReq.send();
    console.log('Film req. sent.');

});
//lapanie błedów
planetReq.addEventListener('error', () => {
    console.log('ERROR!!!');
});
//otwarcie zapytania - metoda GET
planetReq.open('GET', 'https://swapi.dev/api/planets/');
//wysłanie zapytania
planetReq.send();
console.log('Req. sent.')