// need to require Employee because Manager extends the Employee class
const Employee = require("./Employee");

//Manager parent class
class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNumber;
    }
};

module.exports = Manager;