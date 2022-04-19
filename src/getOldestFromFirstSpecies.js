const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const oldest = (animals) => {
  return species.find((specie) => specie.name === animals).residents.reduce((oldestAnimal, eachAnimal) => oldestAnimal.age < eachAnimal.age ? oldestAnimal = eachAnimal : oldestAnimal = oldestAnimal);
}

const animals = data.species[0];
console.log(oldest(animals));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const old = oldest(firstSpecie);
  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
