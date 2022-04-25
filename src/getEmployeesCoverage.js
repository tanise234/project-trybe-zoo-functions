const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeesById = (id) => {
  const employeeDetails = employees.find((employee) => employee.id === id);
  if (employeeDetails === undefined) {
    throw new Error('Informações inválidas');
  }
  return employeeDetails;
};

const getEmployeesByName = (name) => {
  const employeeDetails = employees.find(
    (employee) => employee.firstName === name || employee.lastName === name,
  );
  if (employeeDetails === undefined) {
    throw new Error('Informações inválidas');
  }
  return employeeDetails;
};

const speciesNames = (employee) =>
  employee.responsibleFor.map(
    (animal) => species.find((specie) => specie.id === animal).name,
  );

const speciesLocation = (employee) =>
  employee.responsibleFor.map(
    (animal) => species.find((specie) => specie.id === animal).location,
  );

const coverage = (employee) => {
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesNames(employee),
    locations: speciesLocation(employee),
  };
  return obj;
};

function getEmployeesCoverage(options) {
  // seu código aqui
  if (!options) {
    return employees.map((employee) => coverage(employee));
  }
  if (options.name) {
    const employee = getEmployeesByName(options.name);
    return coverage(employee);
  }
  if (options.id) {
    const employee = getEmployeesById(options.id);
    return coverage(employee);
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
