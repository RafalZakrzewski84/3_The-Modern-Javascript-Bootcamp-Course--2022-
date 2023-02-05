// ONE OPTION FOR ERROR HANDLING...
async function getPlanets() {
	//Invalid URL...
	const res = await axios.get('https://swapi.dev/api/planeklsajdalksts/');
	console.log(res.data);
}

getPlanets().catch((err) => {
	//catch error by .catch
	console.log('IN CATCH!!!');
	console.log(err.name);
	console.log(err.message);
	console.log(err);
});

// ANOTHER OPTION...
async function getPlanets2() {
	try {
		const res = await axios.get('https://swapi.dev/api/planeklsajdalksts/');
		console.log(res.data);
	} catch (e) {
		console.log('IN TRY CATCH!', e);
	}
}
getPlanets2();
