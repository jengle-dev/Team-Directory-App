//Intern parent class
class Intern {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;