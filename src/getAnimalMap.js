const data = require("../data/zoo_data");

function getAnimalMap(options) {
  // seu código aqui
  if (
    Object.keys(options).includes('includeNames') &&
    options['includeNames'] === true
  ) {
    //
    console.log("first thing working");
    if (Object.keys(options).includes('sex') && options['sex'] === "female") {
      console.log("is female");
    }
    //
    if (Object.keys(options).includes('sex') && options['sex'] === "male") {
      console.log("is male");
    }
    //
    if (Object.keys(options).includes('sorted') && options['sorted'] === true) {
      console.log("sorted");
    }
  }
}

getAnimalMap({ includeNames: true, sorted: false, sex: 'male' });

module.exports = getAnimalMap;
