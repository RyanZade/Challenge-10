// using Manager constructor 
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Ryan', 140, 'ryanzade@test.com', 130);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Ryan', 150, 'ryanzade@test.com');

    expect(manager.getRole()).toEqual("Manager");
}); 