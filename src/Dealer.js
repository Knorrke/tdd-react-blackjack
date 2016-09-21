import Player from './Player';
import Card from './Card';

class Dealer extends Player{
  constructor() {
    super();
    this.type = 'dealer';
  }

  anotherCard() {
    var x = this.calculateValue();
    return (x <= 16 && x>0);
  }

}

export default Dealer;
