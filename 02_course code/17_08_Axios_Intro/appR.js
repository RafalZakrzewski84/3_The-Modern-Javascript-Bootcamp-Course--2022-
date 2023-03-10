axios.get('https://swapi.dev/api/planets/').then((res) => {
    //obiekt response
    console.log(res);
    //obiekt data z response
    console.log(res.data);
    //next 10 planets from data.results.name
    for (let planet of res.data.results) {
        console.log(planet.name);
    }
}).catch((err) => {
    console.log('Error in callback')
    console.log(err);
})


//chaining of axios
axios
    .get('https://swapi.dev/api/planets/')
    //w then jest odrazu obiekt z danymi z response
    .then(({ data }) => {
        console.log(data);
        for (let planet of data.results) {
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({ data }) => {
        console.log(data);
        for (let planet of data.results) {
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .catch((err) => {
        console.log('Error in callback')
        console.log(err);
    })

//Refatoring Axios
const nextPlanetsAxios = ((url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url);
})

const printPlanetsAxios = (({ data }) => {
    console.log('*********** refactoring axios');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return data.next;
})

nextPlanetsAxios()
    .then(printPlanetsAxios)
    .then(nextPlanetsAxios)
    .then(printPlanetsAxios)
    .then(nextPlanetsAxios)
    .catch((err) => {
        console.log('Error in callback')
        console.log(err);
    })

// axios
//     .get('https://swapi.dev/api/planets/')
//     .then((res) => {
//         //We don't have to parse the JSON!
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log('IN CATCH CALLBACK!!!');
//         console.log(err);
//     });

// axios
//     .get('https://swapi.dev/api/planetaslkjdaklsjds/') //BAD URL!
//     .then((res) => {
//         //We don't need to check for a 200 status code, because...
//         //Axios will reject the promise for us, unlike fetch!
//         console.log(res.data);
//     })
//     .catch((err) => {
//         //In this example with a not-found URL, this callback will run...
//         console.log('IN CATCH CALLBACK!!!');
//         console.log(err);
//     });

// ********************************
// USING FETCH INSTEAD...
// ********************************
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});