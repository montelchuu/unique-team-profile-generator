const Employee = require('../lib/Employee.js');

test('checks for employee name id and email', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.name).toBe('Matt');
    expect(employee.id).toBe(12);
    expect(employee.email).toBe('test@test.com');
});

test ('checks for getName()', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.getName()).toBe('Matt');
});

test ('checks for getId()', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.getId()).toBe(12);
});

test('checks for getEmail()', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.getEmail()).toBe('test@test.com');
});

test('checks for getRole()', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.getRole()).toBe('Employee');
});