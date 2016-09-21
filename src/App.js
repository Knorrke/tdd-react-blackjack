import React, { Component } from 'react';
import PlayerComp from './Component/Player';
import Player from './Player'
import Card from './Card'
import './App.css';
import Dealer from './Dealer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {player1: new Player(), player2: new Player(), dealer: new Dealer()}
    this.drawCard = this.drawCard.bind(this);
    this.deal = this.deal.bind(this);
    this.drawCard(this.state.dealer)
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
      this.setState({
        player1: this.state.player1, 
        player2: this.state.player2,
        dealer: this.state.dealer
      });
  }

  deal(){
    while(this.state.dealer.anotherCard()){
      this.drawCard(this.state.dealer);
    }
  }

  render() {
    return (
      <div className="app">
        <PlayerComp data={this.state.dealer}/>
        <button onClick={this.deal}>FERITG...?</button>
        <PlayerComp data={this.state.player1}/>
        <button onClick={() => this.drawCard(this.state.player1)}>Noch eine Karte, bitte!</button>
        <PlayerComp data={this.state.player2}/>
        <button onClick={() => this.drawCard(this.state.player2)}>Noch eine Karte, bitte!</button>
      </div>
    );
  }
}

export default App;
