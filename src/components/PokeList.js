import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  return (
    <ul className="poke-list">
      {props.dataList.map((pokemonItem, id) => (
        <li key={id}>
          <Pokemon
            key={id}
            name={pokemonItem.name}
            types={pokemonItem.types}
            image={pokemonItem.url}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokeList;
