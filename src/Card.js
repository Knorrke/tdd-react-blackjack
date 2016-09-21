class Card {
  constructor(value) {
    this.value = value;
    this.suit = this.randomType();
  }
  randomType(){
    switch (Math.floor(Math.random()*4))
      {
        case 0: return 'd';
        case 1: return 's';
        case 2: return 'h';    
        case 3: return 'c';
      }
  }
  parseValue() {
    switch (this.value){
      case 'B':
      case 'D':
      case 'K': return 10
      case 'A': return 1
      default: return parseInt(this.value, 10)
    }
  }
}


export default Card;
