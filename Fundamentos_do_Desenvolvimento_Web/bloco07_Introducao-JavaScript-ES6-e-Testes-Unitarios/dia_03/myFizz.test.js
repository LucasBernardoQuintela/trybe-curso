const myFizz = require('./myFizz');

it ('Se com um número divisível por 3 e 5 e verifique se o retorno é: fizzbuzz', () => {
  expect(myFizz(15)).toContain('fizzbuzz');
});

it ('Se com um número divisível por 3 e verifique se o retorno é: fizz', () => {
  expect(myFizz(6)).toEqual('fizz');
});

it ('Se com um número divisível por 5 e verifique se o retorno é: buzz', () => {
  expect(myFizz(10)).toEqual('buzz');
});

it ('Se com um número que não é divisível por 3 ou 5 e verifique se o retorno é  o número', () => {
  expect(myFizz(11)).toEqual(11);
});

it ('Se com um parâmetro que não é um número e verifique se o retorno é: false', () => {
  expect(myFizz('15')).toEqual(false);
});