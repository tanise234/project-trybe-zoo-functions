const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    // criar array de arrays, inverso de "Object.entries"
    const array_key_value = species.reduce((key_value, specie) => {
      key_value.push([specie.name, specie.residents.length]);
      return key_value;
    }, []);
    // transformar o array de arrays em objeto
    const list = Object.fromEntries(array_key_value);
    return list;
  } else if (Object.values(animal) === ['specie'){
    return species.find((specificSpecie) => specificSpecie.name === animal).residents.length;
  }
}
console.log(countAnimals({'specie': 'lions'}));

module.exports = countAnimals;
