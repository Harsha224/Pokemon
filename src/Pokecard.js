import React, { Component } from "react";
import "./Pokecard.css";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let imgurl = ` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
      this.props.id
    )}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <div className="Pokecard-img">
          <img src={imgurl} alt="image"></img>
        </div>
        <div className="Pokecard-data"> TYPE: {this.props.type}</div>
        <div className="Pokecard-data"> EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
