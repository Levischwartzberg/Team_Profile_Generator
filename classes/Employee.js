class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if ( id === "") {
            throw new Error("Expected parameter 'id' to be a non-empty string or number");
          }
        if (typeof email !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          } 
    }

    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
