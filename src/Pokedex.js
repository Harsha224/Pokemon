import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winner!!</h1>;
    } else {
      title = <h1 className="Pokedex-Loser">Loser!!</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h3>Total experience:{this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.Pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            ></Pokecard>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
