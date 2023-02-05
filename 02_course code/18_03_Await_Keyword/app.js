async function getPlanets() {
	const res = await axios.get('https://swapi.dev/api/planets/');
	console.log('from await', res.data); //only runs once the previous line is complete (the axios promise is resolved)
	const nextPage = await axios.get(`${res.data.next}`);
	console.log('await next page: ', nextPage);
}

getPlanets();

// Without async/await...

function getPlanetsNormal() {
	return axios.get('https://swapi.dev/api/planets/');
}

getPlanetsNormal()
	.then((res) => {
		console.log('from then: ', res.data);
		return axios.get(res.data.next);
	})
	.then((res2) => {
		console.log('then next page: ', res2.data);
	});
