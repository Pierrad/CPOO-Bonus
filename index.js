const mock = require('./mock')

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
  let string = ''
  Object.keys(object).forEach((key) => {
    string += key + ': ' + object[key]
    if (Object.keys(object).indexOf(key) !== Object.keys(object).length - 1) {
      string += ',\n'
    }
  })
  return string
}

// Function to find the beginning of a trip in an array of trips
function findBeginInArray(array) {
  const begin = array.find((item) => {
    const listOfEnding = array.map((item) => item.end)
    if (!listOfEnding.includes(item.begin)) {
      return item
    }
  })
  return begin
}

// Function to create the journey description recursively
function createJourneyRecursively(array, string) {
  const begin = findBeginInArray(array)
  if (begin) {
    const newArray = array.filter((item) => item.begin !== begin.begin)
    let currentJourney = 'Aller de ' + begin.begin + ' à ' + begin.end + ' en ' + begin.type + '.'
    if (begin.number) {
      currentJourney += " Votre numéro de réservation est : " + begin.number + '.'
    }
    if (begin.gate) {
      currentJourney += " Votre porte est la numéro " + begin.gate + '.'
    }
    if (begin.seat) {
      currentJourney += " Votre siège est le " + begin.seat + '.'
    }
    if (begin.rule) {
      currentJourney += " " + begin.rule
    }
    const newString = string + currentJourney + '\n'

    return createJourneyRecursively(newArray, newString)
  }
  return string + 'Vous êtes arrivé à votre destination finale.'
}

console.log('-- Votre trajet est le suivant --\n')
console.log(createJourneyRecursively(shuffle(mock.mock, Math.random()), ''))
console.log('\n----------------------------------')

module.exports = {
  createJourneyRecursively: createJourneyRecursively,
  shuffle: shuffle,
  findBeginInArray: findBeginInArray,
  random: random,
  toStringObject: toStringObject,
}