class Plane extends Transport {
  constructor(number, seat, rule, gate) {
    super(number, seat, rule);
    this.gate = gate;
  }

  getGate() {
    return this.gate;
  }

  setGate(gate) {
    this.gate = gate;
  }
}