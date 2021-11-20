class Transport {
  constructor(number, seat, rule, begin, end) {
    this.number = number;
    this.seat = seat;
    this.rule = rule;
    this.begin = begin;
    this.end = end;
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

  getBegin() {
    return this.begin;
  }

  getEnd() {
    return this.end;
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

  setBegin(begin) {
    this.begin = begin;
  }

  setEnd(end) {
    this.end = end;
  }

}

module.exports = Transport;
