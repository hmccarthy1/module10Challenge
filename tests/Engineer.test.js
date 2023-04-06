const Engineer = require('../lib/engineerConstructor');

test("Test that all fields populate", () => {
    const name = "Hunter";
    const id = 2;
    const email = "huntermccarthy56@hotmail.com";
    const gitHub = "hmccarthy1"
    const newEngineer = new Engineer(name, id, email, gitHub);
    expect(newEngineer.name).toBe(name);
    expect(newEngineer.id).toBe(id);
    expect(newEngineer.email).toBe(email);
    expect(newEngineer.github).toBe(gitHub);
    expect(newEngineer.getGithub()).toBe(gitHub);
    expect(newEngineer.getRole()).toBe("Engineer")
})
