const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce(
    (acc, entrant) => {
      if (entrant.age < 18) {
        return { child: acc.child + 1, adult: acc.adult, senior: acc.senior };
      }
      if (entrant.age < 50) {
        return { child: acc.child, adult: acc.adult + 1, senior: acc.senior };
      }
      return { child: acc.child, adult: acc.adult, senior: acc.senior + 1 };
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const childPrice = countEntrants(entrants).child * data.prices.child;
  const adultPrice = countEntrants(entrants).adult * data.prices.adult;
  const seniorPrice = countEntrants(entrants).senior * data.prices.senior;

  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
