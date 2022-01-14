const {
  encode,
  decode,
} = require('./encode');

it ('Se encode e decode são funções', () => {
  expect(decode(encode('que maneiro'))).toEqual('que maneiro');
});

it ('Se encode transforma a, e, i, o, u em 1, 2, 3, 4, 5 respectivamente', () => {
  expect(encode('que maneiro')).toEqual('q52 m1n23r4');
});

it ('Se encode transforma 1, 2, 3, 4, 5 em a, e, i, o, u respectivamente', () => {
  expect(decode('q52 m1n23r4')).toEqual('que maneiro');
});

it ('Se a frase bcdfghjk não é alterado', () => {
  expect(encode('bcdfghjk')).toEqual('bcdfghjk');
});

it ('Se a string: que maneiro, tem o mesmo númeor de caracteres depois de passar pelas funções', () => {
  expect(decode(encode('que maneiro')).length).toEqual(('que maneiro').length)
});