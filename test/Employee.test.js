const Employee = require("../classes/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, and email if provided valid arguments", () => {
        const employee = new Employee("Doug", 3, "Doug@gmail.com");
  
        expect(employee.name).toEqual("Doug");
        expect(employee.id).toEqual(3);
        expect(employee.email).toEqual("Doug@gmail.com");
      });
  
      it("should throw an error if provided no arguments", () => {
        const a = () => new Employee();
        expect(a).toThrow();
      });
      it("should throw an error if 'name' is not a string", () => {
        const a = () => new Employee(3, 2, "Doug@gmail.com");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(a).toThrowError(err);
      });
      it("should throw an error if 'name' is undefined", () => {
        const a = () => new Employee(undefined, 2, "Doug@gmail.com");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(a).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const a = () => new Employee("Doug", "", "Doug@gmail.com");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(a).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const a = () => new Employee("Doug", undefined, "Doug@gmail.com");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(a).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const a = () => new Employee("Doug", 3);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(a).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const a = () => new Employee("Doug", 3, "");
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(a).toThrowError(err);
      });
    });
    describe("getName", () => {
      it("should return the name of employee when called", () => {
        const a = new Employee("Doug", 3, "Doug@gmail.com");
        expect(a.getName()).toEqual("Doug");
      });
    });
    describe("getID", () => {
      it("should return the id of employee when called", () => {
        const a = new Employee("Doug", 3, "Doug@gmail.com");
        expect(a.getID()).toEqual(3);
      });
    });
    describe("getEmail", () => {
      it("should return the email of employee when called", () => {
        const a = new Employee("Doug", 3, "Doug@gmail.com");
        expect(a.getEmail()).toEqual("Doug@gmail.com");
      });
    });
    describe("getRole", () => {
      it("should return the role of employee when called", () => {
        const a = new Employee("Doug", 3, "Doug@gmail.com");
        expect(a.getRole()).toEqual("Employee");
      });
    });
  });