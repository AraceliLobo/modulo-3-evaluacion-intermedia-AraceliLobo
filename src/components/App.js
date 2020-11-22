import React from "react";
import "../styleSheets/styles.css";
import pokemons from "../data/pokemons";
import PokeList from "./PokeList";
import title from "../images/title.png";
import pikachu2 from "../images/pikachu2.gif";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons,
    };
  }

  render() {
    return (
      <>
        <header className="header">
          <img className="title" src={title} alt="Pokemon title" />
        </header>
        <div className="App">
          <PokeList dataList={this.state.data} />
        </div>
        <footer>
          <img className="pikachu" src={pikachu2} alt="Pikachu" />
        </footer>
      </>
    );
  }
}

export default App;
