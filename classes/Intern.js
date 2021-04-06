const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if (id === "" || id === undefined) {
            throw new Error("Expected parameter 'id' to be a non-empty string or number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          } 
        if (this.school === "" || this.school === undefined) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;