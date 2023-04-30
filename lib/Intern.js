const Employee = require("./Employee");

//Intern parent class
class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;