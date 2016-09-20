import React, { Component } from 'react';
import CardComp from './Card';
import '../App.css';

class PlayerComp extends Component {
  render() {
    return (
      <div className="player">
        {this.props.data.cards.map(function (card, i){
            return <CardComp data={card} key={i}/>
          })}
        <p id="Spielstand">Spielstand: {this.props.data.calculateValue()}</p>
      </div>
    );
  }
}

export default PlayerComp;