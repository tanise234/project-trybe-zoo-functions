const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const specificAnimal = (target) => {
  return data.species.find((specie) => specie.name === target).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  return specificAnimal(scheduleTarget);
}
console.log(getSchedule('lions'));

module.exports = getSchedule;
