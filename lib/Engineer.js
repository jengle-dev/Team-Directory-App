//Engineer parent class
class Engineer {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    };

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;