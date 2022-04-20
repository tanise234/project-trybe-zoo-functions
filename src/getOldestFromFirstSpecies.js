const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const oldest = (animalsId) => {
  const animal = species
    .find((specie) => specie.id === animalsId)
    .residents.reduce((oldestAnimal, eachAnimal) => {
      if (oldestAnimal.age < eachAnimal.age) {
        return eachAnimal;
      }
      return oldestAnimal;
    });
  return animal;
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const old = oldest(firstSpecie);
  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
