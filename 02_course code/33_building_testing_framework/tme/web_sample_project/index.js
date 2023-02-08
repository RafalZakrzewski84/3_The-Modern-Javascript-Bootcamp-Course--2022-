document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const { value } = document.querySelector('input');
	const header = document.querySelector('h3');

	if (value.includes('@')) {
		header.innerText = 'email is valid';
	} else {
		header.innerText = 'email is invalid';
	}
});
