const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayDays = Object.keys(data.hours);

const available = (day) => {
  const animals = [];
  species.forEach((specie) => {
    if (specie.availability.includes(day)) {
      animals.push(specie.name);
    }
  });
  return animals;
};

const specificDay = (day) => {
  const object = {};
  if (day === 'Monday') {
    object[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return object;
  }
  object[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: available(day),
  };
  return object;
};

// console.log(specificDay('Thursday'));

const specificAnimal = (target) =>
  species.find((specie) => specie.name === target).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (arrayDays.some((day) => day === scheduleTarget)) {
    return specificDay(scheduleTarget);
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return specificAnimal(scheduleTarget);
  }
}
console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
