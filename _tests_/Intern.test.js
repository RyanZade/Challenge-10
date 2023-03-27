// using Intern constructor 
const Intern = require('../lib/Intern');
 
test('creates an Intern object', () => {
    const intern = new Intern('Ryan', 100, 'ryanzade@test.com', 'AUNI');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Ryan', 110, 'ryanzade@test.com', 'AUNI');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Ryan', 120, 'ryanzade@test.com', 'AUNI');

    expect(intern.getRole()).toEqual("Intern");
}); 