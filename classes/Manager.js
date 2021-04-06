const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if (id === "" || id === undefined) {
            throw new Error("Expected parameter 'id' to be a non-empty string or number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          } 
        if (officeNumber === "" || officeNumber === undefined) {
            throw new Error("Expected parameter 'office number' to be a non-empty string or number");
        }
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;