const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = [];
  if (ids.length === 0) {
    return result;
  }
  ids.forEach((id) => {
    result.push(...data.species.filter((specie) => specie.id === id));
  });
  return result;
}

module.exports = getSpeciesByIds;
