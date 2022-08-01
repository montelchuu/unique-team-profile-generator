const Intern = require('../lib/Intern.js');

test('checks if employee extends intern', () => {
    const intern = new Intern('Matt', 12, 'test@test.com', 'Ball State University');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toBe(12);
    expect(intern.email).toBe('test@test.com');
    expect(intern.school).toBe('Ball State University');
});

test('checks for Intern getSchool()', () => {
    const intern = new Intern('Matt', 12, 'test@test.com', 'Ball State University');

    exoect(intern.getSchool()).toBe
});