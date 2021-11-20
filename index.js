const mock = require('./mock');
const Bus = require('./model/Transport/Bus/Bus');
const Train = require('./model/Transport/Train/Train');
const Plane = require('./model/Transport/Plane/Plane');


// Generate a random number from a given seed
function random(seed) {
  var x = Math.sin(seed++) * 10000; 
  return x - Math.floor(x);
}

// Function to randomize an array with a seed
function shuffle(array, seed) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(random(seed) * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    ++seed
  }
  return array;
}

// Function to stringify an object
function toStringObject(object) {
  let string = '';
  Object.keys(object).forEach((key) => {
    string += key + ': ' + object[key];
    if (Object.keys(object).indexOf(key) !== Object.keys(object).length - 1) {
      string += ',\n';
    }
  })
  return string
}

// Function to find the beginning of a trip in an array of trips
function findBeginInArray(array) {
  const begin = array.find((item) => {
    const listOfEnding = array.map((item) => item.end);
    if (!listOfEnding.includes(item.begin)) {
      return item;
    }
  })
  return begin;
}

// Function to create the journey description recursively
function createJourneyRecursively(array, string) {
  const begin = findBeginInArray(array);
  if (begin) {
    let vehicle = null;

    if (begin.type === 'bus') {
      vehicle = new Bus(begin.number, begin.seat, begin.rule, begin.begin, begin.end);
    } else if (begin.type === 'train') {
      vehicle = new Train(begin.number, begin.seat, begin.rule, begin.begin, begin.end);
    } else if (begin.type === 'avion') {
      vehicle = new Plane(begin.number, begin.seat, begin.rule, begin.begin, begin.end, begin.gate);
    }

    // Make sure the vehicle is not null
    const newString = vehicle ? string + vehicle.toString() + '\n' : '';

    const newArray = array.filter((item) => item.begin !== begin.begin);
    return createJourneyRecursively(newArray, newString);
  }
  return string + 'Vous êtes arrivé à votre destination finale.';
}

console.log('-- Votre trajet est le suivant --\n');
console.log(createJourneyRecursively(shuffle(mock.mock, Math.random()), ''));
console.log('\n----------------------------------');

module.exports = {
  createJourneyRecursively: createJourneyRecursively,
  shuffle: shuffle,
  findBeginInArray: findBeginInArray,
  random: random,
  toStringObject: toStringObject,
}