const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const staffObject = employees.filter((employee) => employee.managers.includes(managerId));
    const staffPeople = staffObject.map((staff) => `${staff.firstName} ${staff.lastName}`);
    return staffPeople;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
