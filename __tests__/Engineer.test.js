const Engineer = require('../lib/Engineer.js');

test('checks if Employee extends Engineer', () => {
    const engineer = new Engineer('Matt', 12, 'test@test.com', 'montelchuu');

    expect(engineer.name).toBe('Matt');
    expect(engineer.id).toBe(12);
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.github).toBe('montelchuu')
});

test('checks for Engineer getGithub()', () => {
    const engineer = new Engineer('Matt', 12, 'test@test.com', 'montelchuu');

    expect(engineer.getGithub()).toBe('montelchuu');
});

test('checks for Engineer getRole', () => {
    const engineer = new Engineer('Matt', 12, 'test@test.com', 'montelchuu');

    expect(engineer.getRole()).toBe('Engineer');
});