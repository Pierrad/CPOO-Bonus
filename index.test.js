const functions = require('./index')
const mock = require('./mock')
const ramdom = functions.random
const shuffle = functions.shuffle
const toStringObject = functions.toStringObject
const findBeginInArray = functions.findBeginInArray
const createJourneyRecursively = functions.createJourneyRecursively


// Test function random
test('Random number with seed = 1 => 0.7098480789645691', () => {
  expect(ramdom(1)).toBe(0.7098480789645691)
})

// Test function shuffle
test('Shuffle [0,1,2,3] with seed = 1 => [1, 0, 3, 2]', () => {
  expect(shuffle([0,1,2,3], 1)).toEqual([1, 0, 3, 2])
})

// Test function toStringObject
test('toStringObject({a: 1, b: 2}) => "a: 1,\nb: 2"', () => {
  expect(toStringObject({a: 1, b: 2})).toBe("a: 1,\nb: 2")
})

// Test function findBeginInArray
test('Mock => "begin: Madrid,\nend: Barcelone,\ntype: train,\nnumber: 78A,\ngate: null,\nseat: 45B,\nrule: null"', () => {
  expect(findBeginInArray(shuffle(mock.mock, Math.random()))).toStrictEqual({"begin": "Madrid", "end": "Barcelone", "gate": null, "number": "78A", "rule": null, "seat": "45B", "type": "train"})
})

// Test function createJourneyRecursively
const str = "Aller de Madrid à Barcelone en train. Votre numéro de réservation est : 78A. Votre siège est le 45B.\nAller de Barcelone à Gérone en bus.\nAller de Gérone à Stockholm en avion. Votre numéro de réservation est : SK455. Votre porte est la numéro 45B. Votre siège est le 3A. Dépose des bagages au guichet 344.\nAller de Stockholm à New York JFK en avion. Votre numéro de réservation est : SK22. Votre porte est la numéro 22. Votre siège est le 7B. Transfert automatique des bagages\nVous êtes arrivé à votre destination finale."
test('createJourneyRecursively => Aller de Madrid à Barcelone en train. Votre numéro de réservation est : 78A. Votre siège est le 45B.\nAller de Barcelone à Gérone en bus.\nAller de Gérone à Stockholm en avion. Votre numéro de réservation est : SK455. Votre porte est la numéro 45B. Votre siège est le 3A. Dépose des bagages au guichet 344.\nAller de Stockholm à New York JFK en avion. Votre numéro de réservation est : SK22. Votre porte est la numéro 22. Votre siège est le 7B. Transfert automatique des bagages\nVous êtes arrivé à votre destination finale.', () => {
  expect(createJourneyRecursively(shuffle(mock.mock, Math.random()), '')).toBe(str)
})

