const Intern = require('../lib/internConstructor');

test("Test that all fields populate", () => {
    const name = "Hunter";
    const id = 2;
    const email = "huntermccarthy56@hotmail.com";
    const School = "UCF"
    const newIntern = new Intern(name, id, email, School);
    expect(newIntern.name).toBe(name);
    expect(newIntern.id).toBe(id);
    expect(newIntern.email).toBe(email);
    expect(newIntern.school).toBe(School);
    expect(newIntern.getSchool()).toBe(School);
    expect(newIntern.getRole()).toBe("Intern")
})
