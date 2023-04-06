const Employee = require('../lib/employeeConstructor')


test("Creating a new Employee.", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
})


test("Test that all fields populate", () => {
    const name = "Hunter";
    const id = 2;
    const email = "huntermccarthy56@hotmail.com"
    const newEmployee = new Employee(name, id, email);
    expect(newEmployee.name).toBe(name);
    expect(newEmployee.id).toBe(id);
    expect(newEmployee.email).toBe(email);
})
