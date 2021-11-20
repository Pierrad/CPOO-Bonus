const Transport = require('../Transport');

class Plane extends Transport {
  constructor(number, seat, rule, begin, end, gate) {
    super(number, seat, rule, begin, end);
    this.gate = gate;
  }

  getGate() {
    return this.gate;
  }

  setGate(gate) {
    this.gate = gate;
  }

  toString() {
    return `De ${this.getBegin()}, prenez le vol ${this.getNumber()} à destination de ${this.getEnd()}. Porte ${this.getGate()}, siège ${this.getSeat()}. ${this.getRule()}`;
  }
}

module.exports = Plane;
