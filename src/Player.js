class Player {
  constructor() {
    this.cards = []
  }

  calculateValue() {
    var val=0, aceCount=0;
    for (let card of this.cards){
      let next = card.parseValue()
      if (next === 1) {
        aceCount++;
      } 
      val+=next;
    } 

    while (val <= 11 && aceCount > 0) {
      val += 10;
      aceCount--;
    }
    if (val>21) {val=-1;}
    return val;
  }

  addCard(card) {
    this.cards.push(card);
  }

  setCards(cards) {
    this.cards = cards;
  }
}

export default Player;
