const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const amountOfAnimals = () => {
  // criar array de arrays, inverso de "Object.entries"
  const arrayKeyValue = species.reduce((keyValue, specie) => {
    keyValue.push([specie.name, specie.residents.length]);
    return keyValue;
  }, []);
  // transformar o array de arrays em objeto
  const list = Object.fromEntries(arrayKeyValue);
  return list;
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return amountOfAnimals();
  }
  if (Object.values(animal).length === 1) {
    return species.find(
      (specificSpecie) => specificSpecie.name === animal.specie,
    ).residents.length;
  }
  if (Object.values(animal).length === 2) {
    const specificSpecies = species.find(
      (specificSpecie) => specificSpecie.name === animal.specie,
    );
    return specificSpecies.residents.filter(
      (specificSex) => specificSex.sex === animal.sex,
    ).length;
  }
}

module.exports = countAnimals;
