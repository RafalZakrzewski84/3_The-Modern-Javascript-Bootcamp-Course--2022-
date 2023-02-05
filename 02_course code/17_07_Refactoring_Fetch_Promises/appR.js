// const checkStatusAndParse = (response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
// };

// const printPlanets = (data) => {
//     console.log('Loaded 10 more planets...');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
//     return fetch(url);
// };

// fetchNextPlanets()
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log('SOMETHING WENT WRONG WITH FETCH!');
//         console.log(err);
//     });


//funkcja zwraca response pierwszego fetcha
const checkStatusAndGiveData = ((response) => {
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json()
})

//funkcja wypisuje nazwy planet i zeraca URL do pobrania nastepnych planet
const printFetchedPlanets = ((data) => {
    console.log('load next 10 planets');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
})

//funsja zwraca fetch do url z poprzedniego zapytania
const next10Planets = ((url = 'https://swapi.dev/api/planets/') => {
    console.log(url);
    return fetch(url);
})

//zaczynamy od funckji bez argumentu bo domyslnie ma przypisany url
next10Planets()
    .then(checkStatusAndGiveData)
    .then(printFetchedPlanets)
    .then(next10Planets)
    .then(checkStatusAndGiveData)
    .then(printFetchedPlanets)
    .then(next10Planets)
    .then(checkStatusAndGiveData)
    .then(printFetchedPlanets)
    .then(next10Planets)
    .catch((err) => {
        console.log('error: ', err);
    })