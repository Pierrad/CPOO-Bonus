const Transport = require('../Transport');

class Bus extends Transport {
  constructor(number, seat, rule, begin, end) {
    super(number, seat, rule, begin, end);
  }

  toString() {
    return `Prenez le bus ${this.getNumber() || ''}de ${this.getBegin()} à ${this.getEnd()}. ${this.getSeat() ? `Asseyez vous à la place ${this.seat}.` : "Pas d'attribution de sièges."}`;
  }

}

module.exports = Bus;
