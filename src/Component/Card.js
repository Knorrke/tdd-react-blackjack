import React, { Component } from 'react';
import '../App.css';

class CardComp extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.data.value}</p>
      </div>
    );
  }
}

export default CardComp;
