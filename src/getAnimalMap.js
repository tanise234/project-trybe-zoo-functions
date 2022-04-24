const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

const animalsByLocation = () => {
  const arrayNE = species
    .filter((specie) => specie.location === "NE")
    .map((specie) => specie.name);
  const arrayNW = species
    .filter((specie) => specie.location === "NW")
    .map((specie) => specie.name);
  const arraySE = species
    .filter((specie) => specie.location === "SE")
    .map((specie) => specie.name);
  const arraySW = species
    .filter((specie) => specie.location === "SW")
    .map((specie) => specie.name);
  return { NE: arrayNE, NW: arrayNW, SE: arraySE, SW: arraySW };
};

const animalsByLocationAndName = (options) => {
  return Object.fromEntries(
    Object.entries(animalsByLocation()).map((keyValueArray) => {
      return [
        [keyValueArray[0]],
        keyValueArray[1].map((animal) => {
          const arrayNames = [];
          const arrayResidents = species.find(
            (specie) => specie.name === animal
          ).residents;
          for (let resident of arrayResidents) {
            sexFilter(options, resident, arrayNames);
          }
          return {
            [animal]: arrayNames,
          };
        }),
      ];
    })
  );
};

const sexFilter = (options, resident, arrayNames) => {
  if (
    Object.keys(options).includes("sex") &&
    options.sex === "female" &&
    resident.sex === "female"
  ) {
    arrayNames.push(resident.name);
    return arrayNames;
  }
  if (
    Object.keys(options).includes("sex") &&
    options.sex === "male" &&
    resident.sex === "male"
  ) {
    arrayNames.push(resident.name);
    return arrayNames;
  }
};

const namesSorted = () => {};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalsByLocation();
  }
  if (
    Object.keys(options).includes("includeNames") &&
    options.includeNames === true
  ) {
    return animalsByLocationAndName(options);
    //   if (Object.keys(options).includes('sex') && options.sex === 'female') {
    //   }
    //   if (Object.keys(options).includes('sex') && options.sex === 'male') {
    //   }
    //   if (Object.keys(options).includes('sorted') && options.sorted === true) {
    //   }
  }
}

console.log(getAnimalMap({ includeNames: true, sex: "female" }));

module.exports = getAnimalMap;
