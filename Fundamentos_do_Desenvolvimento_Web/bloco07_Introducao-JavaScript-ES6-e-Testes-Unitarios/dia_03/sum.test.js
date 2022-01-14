const sum = require('./sum');

it ('Com 4 e 5, a função retorna 9', () =>{
  expect(sum(4, 5)).toEqual(9);
});

it ('Com 0 e 0, a função retorna 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

it ('Com 4 e a str (5) a função lança um erro', () => {
  expect(() => {sum(4, '5')}).toThrow();
});

it ('Com 4 e a str (5) a função lança um erro', () => {
  expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
});
