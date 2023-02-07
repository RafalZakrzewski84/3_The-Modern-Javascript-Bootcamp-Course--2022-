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

it('after searching, dropdown opens up', () => {
	//simulating searching
	const input = document.querySelector('input');
	input.value = 'Avengers';
	input.dispatchEvent(new Event('input'));

	const dropdown = document.querySelector('.dropdown');
	expect(dropdown.className).to.include('is-active');
});
