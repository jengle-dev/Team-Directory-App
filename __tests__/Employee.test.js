const Employee = require('../lib/Employee.js');
// Set up tests for each employee field

test('Can successfully set the employee name using a constructor argument.', () => {
    it('should set the employee name to the input given', () => {
        const name = 'Jennifer';
        const newName = new Employee(name);
        expect(newName.name).toBe(name);
    })
});

test('Can successfully set the employee id using a constructor argument.', () => {
    it('should set the employee id number to the input given', () => {
    const id = '10213';
    const newId = new Employee(id);
    expect(newId.id).toBe(id);
    })
});

test('Can successfully set the employee email using a constructor argument.', () => {
    it('should set the employee email address to the input given', () => {
    const email = 'test_email_01@workemail.com';
    const newEmail = new Employee(email);
    expect(newEmail.email).toBe(email);
    })
});

// test('Can successfully set the employee role/position using a constructor argument.', () => {
//     const role = 
// })

test('Can successfully get the employee name via getName{}', () => {
    it('should get the employee name from getName{} method', () => {
    const testName = 'Jennifer';
    const newName = new Employee(testName);
    expect(newName.getName()).toBe(testName);
    })
});