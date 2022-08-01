const Employee = require('../lib/Employee.js');

test('checks for employee name id and email', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('test@test.com');
});

test ('checks for getName()', () => {
    const employee = new Employee('Matt', 12, 'test@test.com');

    expect(employee.getName()).toBe('Matt');
})