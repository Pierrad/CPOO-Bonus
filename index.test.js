const functions = require('./index');
const mock = require('./mock');
const ramdom = functions.random;
const shuffle = functions.shuffle;
const toStringObject = functions.toStringObject;
const findBeginInArray = functions.findBeginInArray;
const createJourneyRecursively = functions.createJourneyRecursively;


// Test function random
test('Random number with seed = 1 => 0.7098480789645691', () => {
  expect(ramdom(1)).toBe(0.7098480789645691);
})

// Test function shuffle
test('Shuffle [0,1,2,3] with seed = 1 => [1, 0, 3, 2]', () => {
  expect(shuffle([0,1,2,3], 1)).toEqual([1, 0, 3, 2]);
})

// Test function toStringObject
test('toStringObject({a: 1, b: 2}) => "a: 1,\nb: 2"', () => {
  expect(toStringObject({a: 1, b: 2})).toBe("a: 1,\nb: 2");
})

// Test function findBeginInArray
test('Mock => "begin: Madrid,\nend: Barcelone,\ntype: train,\nnumber: 78A,\ngate: null,\nseat: 45B,\nrule: null"', () => {
  expect(findBeginInArray(shuffle(mock.mock, Math.random()))).toStrictEqual({"begin": "Madrid", "end": "Barcelone", "gate": null, "number": "78A", "rule": null, "seat": "45B", "type": "train"});
})

// Test function createJourneyRecursively
const str = "Prenez le train 78A de Madrid à Barcelone. Asseyez vous à la place 45B.\nPrenez le bus de Barcelone à l'aéroport de Gérone. Pas d'attribution de sièges.\nDe l'aéroport de Gérone, prenez le vol SK455 à destination de Stockholm. Porte 45B, siège 3A. Dépose des bagages au guichet 344.\nDe Stockholm, prenez le vol SK22 à destination de New York JFK. Porte 22, siège 7B. Les bagages seront automatiquement transférés de votre dernière étape.\nVous êtes arrivé à votre destination finale.";
test(`createJourneyRecursively => ${str}`, () => {
  expect(createJourneyRecursively(shuffle(mock.mock, Math.random()), '')).toBe(str);
})


