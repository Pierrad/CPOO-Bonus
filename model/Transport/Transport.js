class Transport {
  constructor(number, seat, rule) {
    this.number = number;
    this.seat = seat;
    this.rule = rule;
  }

  getNumber() {
    return this.number;
  }

  getSeat() {
    return this.seat;
  }

  getRule() {
    return this.rule;
  }

  setNumber(number) {
    this.number = number;
  }
  
  setSeat(seat) {
    this.seat = seat;
  }

  setRule(rule) {
    this.rule = rule;
  }
}