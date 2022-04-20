const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayNE = [];
const arrayNW = [];
const arraySE = [];
const arraySW = [];

const animalsByLocation = () => {
  species.forEach((specie) => {
    switch (specie.location) {
    case 'NE':
      arrayNE.push(specie.name);
      break;
    case 'NW':
      arrayNW.push(specie.name);
      break;
    case 'SE':
      arraySE.push(specie.name);
      break;
    default:
      arraySW.push(specie.name);
      break;
    }
  });
  return { NE: arrayNE, NW: arrayNW, SE: arraySE, SW: arraySW };
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalsByLocation();
  }
  // if (
  //   Object.keys(options).includes('includeNames') &&
  //   options.includeNames === true
  // ) {
  //   console.log('first thing working');
  //   if (Object.keys(options).includes('sex') && options.sex === 'female') {
  //   }
  //   if (Object.keys(options).includes('sex') && options.sex === 'male') {
  //   }
  //   if (Object.keys(options).includes('sorted') && options.sorted === true) {
  //   }
  // }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
