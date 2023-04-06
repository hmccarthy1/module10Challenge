const Manager = require('../lib/teamManagerConstructor');

test("Test that all fields populate", () => {
    const name = "Hunter";
    const id = 2;
    const email = "huntermccarthy56@hotmail.com";
    const Office = "3"
    const newManager = new Manager(name, id, email, Office);
    expect(newManager.name).toBe(name);
    expect(newManager.id).toBe(id);
    expect(newManager.email).toBe(email);
    expect(newManager.officeNumber).toBe(Office);
    expect(newManager.getOfficeNumber()).toBe(Office);
    expect(newManager.getRole()).toBe("Manager")
})
