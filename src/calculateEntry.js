const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      return { child: acc.child + 1,  adult: acc.adult, senior: acc.senior };
    }
    if (entrant.age < 50) {
      return { child: acc.child,  adult: acc.adult + 1, senior: acc.senior };
    }
    return { child: acc.child,  adult: acc.adult, senior: acc.senior + 1 };
  }, { child: 0, adult: 0, senior: 0 });
}
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
