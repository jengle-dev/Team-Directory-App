//Employee parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

function getName(){
    return this.name;
}

function getId(){
    return this.id;
}

function getEmail(){
    return this.email;
}

function getRole() {
    return "employee";
}

module.exports = Employee;