const Manager = require('../lib/Manager.js');

test('checks if Employee extends Manager', () => {
    const manager = new Manager('Matt', 12, 'test@test.com', 101);

    expect(manager.name).toBe('Matt');
    expect(manager.id).toBe(12);
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNumber).toBe(101);
});

test('checks for Manager getRole()', () => {
    const manager = new Manager('Matt', 12, 'test@test.com', 101);

    expect(manager.getRole()).toBe('Manager');
});

test('checks for Manager getOfficeNumber()', () =>{
    const manager = new Manager('Matt', 12, 'test@test.com', 101);

    expect(manager.getOfficeNumber()).toBe(101);
})