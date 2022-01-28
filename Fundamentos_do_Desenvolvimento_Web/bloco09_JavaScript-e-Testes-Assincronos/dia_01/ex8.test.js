const { getPokemonDetails } = require('./ex8');

it ('testa se um pokemon existente retorna o esperado', (done) => {
  const expectedResult = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

  function callback(err, result) {
    try {
      expect(result).toBe(expectedResult)
      done();
    } catch (e) {
      done(e);
    }
  }

  getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback );
});

it ('testa se uma entrada inexistente retorna o esperado', (done) => {
  const expectedResult = new Error('Não temos esse pokémon para você :(');

  function callback(err, result) {
    try {
      expect(err).toEqual(expectedResult)
      done();
    } catch (e) {
      done(e);
    }
  }

  getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback );
});