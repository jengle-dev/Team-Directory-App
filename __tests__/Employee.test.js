const Employee = require('../lib/Employee.js');
// Set up tests for each employee field

test ('Can successfully set the employee name using a constructor argument.', () => {
    const name = 'Jennifer';
    const newName = new Employee(name);
    expect(newName.name).toBe(name);
});

test ('Can successfully set the employee id using a constructor argument.', () => {
    const id = '10213';
    const newId = new Employee(id);
    expect(newId.id).toBe(id);
});

test ('Can successfully set the employee email using a constructor argument.', () => {
    const email = 'test_email_01@workemail.com';
    const newEmail = new Employee(email);
    expect(newEmail.email).toBe(email);
});

test ('Can successfully set the employee role/position using a constructor argument.')

test ('Can successfully get the employee name via getName{}', () => {
    const testName = 'Jennifer';
    const newName = new Employee(testName);
    expect(newName.getName()).toBe(testName);
});