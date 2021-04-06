const Manager = require("../classes/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with a name, age, email, and office number if provided valid arguments", () => {
        const manager = new Manager("Doug", 3, "Doug@gmail.com", 123)
        expect(manager.name).toEqual("Doug");
        expect(manager.id).toEqual(3);
        expect(manager.email).toEqual("Doug@gmail.com");
        expect(manager.officeNumber).toEqual(123);
      });
  
      it("should throw an error if provided no arguments", () => {
        const manager = () => new Manager();
        expect(manager).toThrow();
      });
      it("should throw an error if 'name' is not a string", () => {
        const manager = () => new Manager(3, 2, "Doug@gmail.com", 123);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if 'name' is undefined", () => {
        const manager = () => new Manager(undefined, 2, "Doug@gmail.com", 123);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const manager = () => new Manager("Doug", "", "Doug@gmail.com", 123);
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const manager = () => new Manager("Doug", undefined, "Doug@gmail.com", 123);
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const manager = () => new Manager("Doug", 3, "", 123);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const manager = () => new Manager("Doug", 3, undefined, 123);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an office number", () => {
        const manager = () => new Manager("Doug", 3, "Doug@gmail.com");
        const err = new Error("Expected parameter 'office number' to be a non-empty string or number");
        expect(manager).toThrowError(err);
      });
      it("should throw an error if not provided an office number", () => {
        const manager = () => new Manager("Doug", 3, "Doug@gmail.com", "");
        const err = new Error("Expected parameter 'office number' to be a non-empty string or number");
        expect(manager).toThrowError(err);
      });
    });
    describe("getRole", () => {
      it("should return the role of employee when called", () => {
        const manager = new Manager("Doug", 3, "Doug@gmail.com", 123);
        expect(manager.getRole()).toEqual("Manager");
      });
    });
  });