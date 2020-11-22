import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  return (
    <div className="poke-li">
      <div className="poke-image">
        <img src={props.image} alt={props.name} />
      </div>
      <h2 className="poke-name">{props.name}</h2>
      <div className="poke-info">
        <div className="poke-types">
          <ul className="types-list">
            {props.types.map((oneType, index) => (
              <li className="types-li" key={index}>
                {oneType}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;
