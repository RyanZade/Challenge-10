// using Engineer constructor 
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ryan', 60, 'ryanzade@test.com', 'testHub');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Ryan', 70, 'ryanzade@test.com', 'testHub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Ryan', 80, 'ryanzade@test.com', 'testHub');

    expect(engineer.getRole()).toEqual("Engineer");
});