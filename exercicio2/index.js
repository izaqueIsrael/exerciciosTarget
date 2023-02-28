const form = document.querySelector('.form')
const forms = document.forms['formElement']
let sequence = fibonacciSequence(1000);

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = Number(document.querySelector('.form__input').value)
  let found = false;
  sequence.forEach((item) => {
    if (item === inputValue)
      found = true;
  });
  if (found)
    document.querySelector('#message').textContent = 'Pertence à sequência';
  else
    document.querySelector('#message').textContent = 'Não pertence à sequência';
  forms.reset()
});

function fibonacci(num) {
  let a = 1, b = 0, temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

function fibonacciSequence(length) {
  let seq = [];
  for (var i = 0; i <= length; i++) {
    seq.push(fibonacci(i));
  }
  return seq;
}