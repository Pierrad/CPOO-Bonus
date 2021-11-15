module.exports.mock = [
  {
    begin: "Madrid",
    end: "Barcelone",
    type: "train",
    number: "78A",
    gate: null,
    seat: "45B",
    rule: null,
  },
  {
    begin: "Barcelone",
    end: "Gérone",
    type: "bus",
    number: null,
    gate: null,
    seat: null,
    rule: null,
  },
  {
    begin: "Gérone",
    end: "Stockholm",
    type: "avion",
    number: "SK455",
    gate: "45B",
    seat: "3A",
    rule: "Dépose des bagages au guichet 344.",
  },
  {
    begin: "Stockholm",
    end: "New York JFK",
    type: "avion",
    number: "SK22",
    gate: "22",
    seat: "7B",
    rule: "Transfert automatique des bagages",
  }
]