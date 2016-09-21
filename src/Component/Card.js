import React, { Component } from 'react';
import '../App.css';

class CardComp extends Component {
  render() {
    return (
      <div className="card">
      <img src={require('../../img/'+this.props.data.suit + this.props.data.value + '.png')}/>
      </div>
    );
  }
}

export default CardComp;
