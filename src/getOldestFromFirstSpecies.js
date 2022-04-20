const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const oldest = (animalsId) => {
  const arrayAnimals = species.find(
    (specie) => specie.id === animalsId,
  ).residents;
  return arrayAnimals.reduce(
    (oldestAnimal, eachAnimal) =>
      oldestAnimal.age < eachAnimal.age ? eachAnimal : oldestAnimal,
  );
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const old = oldest(firstSpecie);
  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
