it('works', () => {
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
