const searchEmployee = require('./professionalBoard');
const realInfo = ['firstName', 'lastName', 'specialities'];

it ('Se a função searchEmployee existe', () => {
  expect(typeof searchEmployee).toEqual('function');
});

it ("Se ao chamar a função com os parâmetros: (4678-2, ['firstName', 'lastName', 'specialities'] a função retorna os valores da keys do funcionário correto", () => {
  expect(searchEmployee('4678-2', realInfo)).toEqual('Paul, Dodds, [Backend]');
})

it ("Se ao chamar a função com um id que não seja um str com 6 caracteres, lança um erro", () => {
  expect(() => {searchEmployee('00000-0', realInfo)}).toThrow();
})

it ("Se ao chamar a função com um id que não existe ele me lança um erro", () => {
  expect(() => {searchEmployee('0000-0', realInfo)}).toThrowError('ID não identificada');
});

it ("Se ao chamar a função com uma informação inexistente ele me lança um erro", () => {
  expect(() => {searchEmployee('4678-2', ['like sports'])}).toThrowError;("Informação indisponível");
})
