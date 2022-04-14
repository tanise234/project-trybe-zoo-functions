const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let isOlder = false;
  species.forEach((specie) => {
    if (specie.name === animal) {
      isOlder = specie.residents.every((resident) => resident.age >= age);
    }
  });
  return isOlder;
}

module.exports = getAnimalsOlderThan;
