const waitFor = (selector) => {
	return new Promise((resolve, reject) => {
		const interval = setInterval(() => {
			if (document.querySelector(selector)) {
				clearInterval(interval);
				clearTimeout(timeOut);
				resolve();
			}
		}, 30);
		const timeOut = setTimeout(() => {
			clearInterval(interval);
			reject();
		}, 2000);
	});
};

beforeEach(() => {
	document.querySelector('#target').innerHTML = '';
	createAutoComplete({
		root: document.querySelector('#target'),
		fetchData() {
			return [
				{ Title: 'Avengers' },
				{ Title: 'Not Avengers' },
				{ Title: 'Some other movies' },
			];
		},
		renderOption(movie) {
			return movie.Title;
		},
	});
});

it('dropdown closed on start', () => {
	const dropdown = document.querySelector('.dropdown');
	expect(dropdown.className).not.to.include('is-active');
});

it('after searching, dropdown opens up', async () => {
	//simulating searching
	const input = document.querySelector('input');
	input.value = 'Avengers';
	input.dispatchEvent(new Event('input'));

	//test will fail because searching use debounce fnc
	//need to hold on assertion by wait for function
	await waitFor('.dropdown-item');
	const dropdown = document.querySelector('.dropdown');
	expect(dropdown.className).to.include('is-active');
});

it('after searching, displays some results', async () => {
	const input = document.querySelector('input');
	input.value = 'Avengers';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');
	const items = document.querySelectorAll('.dropdown-item');
	expect(items.length).to.equal(4);
});
