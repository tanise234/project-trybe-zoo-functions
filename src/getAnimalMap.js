const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

const animalsByLocation = () => {
  const arrayNE = species.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
  const arrayNW = species.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
  const arraySE = species.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
  const arraySW = species.filter((specie) => specie.location === 'SW').map((specie) => specie.name);

  return { NE: arrayNE, NW: arrayNW, SE: arraySE, SW: arraySW };
};

const animalsByLocationAndName = () => {
  // species.forEach((specie) => {
  //   switch (specie.location) {
  //     case "NE":
  //       specie.residents.forEach((resident) => arrayNE.push(resident.name));
  //       break;
  //     case "NW":
  //       arrayNW.push(specie.name);
  //       break;
  //     case "SE":
  //       arraySE.push(specie.name);
  //       break;
  //     default:
  //       arraySW.push(specie.name);
  //       break;
  //   }
  // });
  // return locationObject;

  const residentsByLocation = animalsByLocation().NE.map(
    (animals) => {
      [animals] = 
      species.find((specie) => specie.name === animals).residents
    }
  );
  return residentsByLocation;
  // .forEach((resident) => arrayNE.push(resident.name))
  // );
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
