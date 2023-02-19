
//Employee parent class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        let role = 'Employee';
    }
};
//Manager parent class
class Manager {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        let role = 'Manager';
    }
};
//Engineer parent class
class Engineer {
    constructor(name, id, email, github, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        let role = 'Engineer';
    }
};
//Intern parent class
class Engineer {
    constructor(name, id, email, school, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        let role = 'Intern';
    }
};