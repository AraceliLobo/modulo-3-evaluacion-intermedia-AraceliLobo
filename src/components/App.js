import React from "react";
import "../styleSheets/styles.css";
import pokemons from "../data/pokemons";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons,
    };
  }

  render() {
    return (
      <div className="App">
        <PokeList dataList={this.state.data} />
      </div>
    );
  }
}

export default App;
