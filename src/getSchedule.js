const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");
const arrayDays = Object.keys(data.hours);

const specificDay = (day) => {
  const opening = arrayDays.find((arrayDay) => arrayDay === day).open;
  const closing = arrayDays.find((arrayDay) => arrayDay === day).close;
  const array = [
    [day],
    [
      [
        [`officeHour`],
        [`Open from ${opening}am until ${closing}pm`],
      ],
      [[`exhibition`], [data.hours.day]],
    ],
  ];
  return Object.fromEntries(array);
};

const specificAnimal = (target) => {
  return species.find((specie) => specie.name === target).availability;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (arrayDays.some((day) => day === scheduleTarget)) {
    return specificDay(scheduleTarget);
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return specificAnimal(scheduleTarget);
  }
}
console.log(getSchedule("Tuesday"));

module.exports = getSchedule;
