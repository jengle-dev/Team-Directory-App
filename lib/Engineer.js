const Employee = require("./Employee");

//Engineer parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    };

    getGitHub() {
        return this.github;
    }
};

module.exports = Engineer;