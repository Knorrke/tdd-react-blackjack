import React, { Component } from 'react';
import PlayerComp from './Component/Player';
import Player from './Player'
import Card from './Card'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {player1: new Player(), player2: new Player()}
    this.drawCard = this.drawCard.bind(this);
  }

  drawCard(player) {
    var x, temp = Math.floor(Math.random()*13 + 2);
      switch (temp) {
        case 11: x='B'; break;
        case 12: x='D'; break;
        case 13: x='K'; break;
        case 14: x='A'; break;
        default: x=String(temp); break;
      }
      player.addCard(new Card(x));
      this.setState({player1: this.state.player1, player2: this.state.player2});
  }

  render() {
    return (
      <div className="app">
        <PlayerComp data={this.state.player1}/>
        <button onClick={() => this.drawCard(this.state.player1)}>Draw Card</button>
        <PlayerComp data={this.state.player2}/>
        <button onClick={() => this.drawCard(this.state.player2)}>Draw Card</button>
      </div>
    );
  }
}

export default App;
