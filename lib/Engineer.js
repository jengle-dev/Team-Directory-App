//Engineer parent class
class Engineer {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github;
    }
};

function getRole(){
    return "engineer";
}; 

function getGithub(){
    return this.github;
};

module.exports = Engineer;