const assert = require('assert');

it('has a text input', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');
  assert(input);
});

it('shows a success message with a valid email', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');
  input.value = 'alskdjf@aslkdjf.com';
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  const h3 = dom.window.document.querySelector('h3');
  assert.strictEqual(h3.innerText, 'email is valid');
});

it('shows a error message with a invalid email', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');
  input.value = 'alskdjfaslkdjf.com';
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  const h3 = dom.window.document.querySelector('h3');
  assert.strictEqual(h3.innerText, 'email is invalid');
});
