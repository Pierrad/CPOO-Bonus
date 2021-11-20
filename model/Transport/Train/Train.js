const Transport = require('../Transport');

class Train extends Transport {
  constructor(number, seat, rule, begin, end) {
    super(number, seat, rule, begin, end);
  }

  toString() {
    return `Prenez le train ${this.getNumber() || ''} de ${this.getBegin()} à ${this.getEnd()}. ${this.getSeat() ? `Asseyez vous à la place ${this.getSeat()}.` : "Pas d'attribution de sièges."}`;
  }
}

module.exports = Train;
