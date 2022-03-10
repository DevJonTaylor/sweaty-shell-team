const Employee = require('../src/Employees/Employee');
const testProps = {
  id: 4,
  name: 'Errol Barg',
  email: 'ebarg3@imdb.com',
  user: 'ebarg3',
  school: 'University of the Southwest',
  officeNumber: '460-831-3454',
  role: 'Employee'
};

describe('Employee Class', () => {
  const employee = new Employee();
  test('Employee\'s set and get name.', () => {
    employee.setName(testProps.name);
    expect(employee.getName()).toBe(testProps.name);
  });

  test('Employee\'s set and get email.', () => {
    employee.setEmail(testProps.email);
    expect(employee.getEmail()).toBe(testProps.email);
  });

  test('Employee\'s set and get id.', () => {
    employee.setId(testProps.id);
    expect(employee.getId()).toBe(testProps.id);
  });

  test('Employee\'s getRole method.', () => {
    expect(employee.getRole()).toBe(testProps.role);
  });
});