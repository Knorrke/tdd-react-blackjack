class Card {
  constructor(value) {
    this.value = value;
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
