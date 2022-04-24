const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsByLocation = () => {
  const arrayNE = species
    .filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name);
  const arrayNW = species
    .filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name);
  const arraySE = species
    .filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name);
  const arraySW = species
    .filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name);
  return { NE: arrayNE, NW: arrayNW, SE: arraySE, SW: arraySW };
};

const sexFilter = (options, resident, arrayNames) => {
  // caso tenha o filtro 'sex: female', retornar todos os nomes de animais fêmeas
  if (options.sex === 'female' && resident.sex === 'female') {
    arrayNames.push(resident.name);
    return arrayNames;
  }
  // caso tenha o filtro 'sex: male', retornar todos os nomes de animais machos
  if (options.sex === 'male' && resident.sex === 'male') {
    arrayNames.push(resident.name);
    return arrayNames;
  }
};

const sortFilter = (options, arrayNames) => {
  if (Object.keys(options).includes('sorted') && options.sorted === true) {
    arrayNames.sort();
  }
};

const animalsNames = (options, animal) => {
  const arrayNames = [];
  const arrayResidents = species.find(
    (specie) => specie.name === animal,
  ).residents;
  arrayResidents.forEach((resident) => {
    if (!options.sex) {
      arrayNames.push(resident.name);
    } else {
      sexFilter(options, resident, arrayNames);
    }
    sortFilter(options, arrayNames);
  });
  return {
    [animal]: arrayNames,
  };
};

const animalsByLocationAndName = (options) => {
  const accessObj = Object.fromEntries(
    Object.entries(animalsByLocation()).map((keyValueArray) => {
      const obj = [
        [keyValueArray[0]],
        keyValueArray[1].map((animal) => animalsNames(options, animal)),
      ];
      return obj;
    }),
  );
  return accessObj;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalsByLocation();
  }
  if (options.includeNames === true) {
    return animalsByLocationAndName(options);
  }
  return animalsByLocation();
}

console.log(getAnimalMap({ includeNames: true }).SE);

module.exports = getAnimalMap;
