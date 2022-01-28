// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex9");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = new Error('Não temos esse pokémon para você :(');

    function callback(err, result) {
      try {
        expect(err).toEqual(expectedResult);
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      try {
        expect(result).toEqual(expectedResult);
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});