const uppercase = require('./ex7');

it ('testa se entrar: maiúscula, sai: MAIÚSCULA', (done) => {
  const expectedResult = 'MAIÚSCULA';

  function callback(str) {
    expect(str).toEqual(expectedResult);
    done();
  }

  uppercase('maiúscula', callback)
});