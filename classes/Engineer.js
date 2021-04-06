const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if (id === "" || id === undefined) {
            throw new Error("Expected parameter 'id' to be a non-empty string or number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          } 
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;