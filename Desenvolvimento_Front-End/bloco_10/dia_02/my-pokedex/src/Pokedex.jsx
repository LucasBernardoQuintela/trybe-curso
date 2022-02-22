import React from "react";
import pokemons from "./data";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  render() {
    const list = pokemons.map(index => <Pokemon obj={index} />)
    return (
      <div className="pokemon-container">{list}</div>
    )
  }
}

export default Pokedex;