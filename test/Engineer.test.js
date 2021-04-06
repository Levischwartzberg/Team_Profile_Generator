const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with a name, age, email, and github username if provided valid arguments", () => {
        const engineer = new Engineer("Doug", 3, "Doug@gmail.com", "Doug123");
  
        expect(engineer.name).toEqual("Doug");
        expect(engineer.id).toEqual(3);
        expect(engineer.email).toEqual("Doug@gmail.com");
        expect(engineer.github).toEqual("Doug123");
      });
  
      it("should throw an error if provided no arguments", () => {
        const engineer = () => new Engineer();
  
        expect(engineer).toThrow();
      });

      it("should throw an error if 'name' is not a string", () => {
        const engineer = () => new Engineer(3, 2, "Doug@gmail.com", "Doug123");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if 'name' is undefined", () => {
        const engineer = () => new Engineer(undefined, 2, "Doug@gmail.com", "Doug123");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const engineer = () => new Engineer("Doug", "", "Doug@gmail.com", "Doug123");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const engineer = () => new Engineer("Doug", undefined, "Doug@gmail.com", "Doug123");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const engineer = () => new Engineer("Doug", 3, undefined, "Doug123");
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const engineer = () => new Engineer("Doug", 3, "", "Doug123");
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided a Github", () => {
        const engineer = () => new Engineer("Doug", 3, "Doug@gmail.com");
        const err = new Error("Expected parameter 'github' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
      it("should throw an error if not provided a Github", () => {
        const engineer = () => new Engineer("Doug", 3, "Doug@gmail.com", "");
        const err = new Error("Expected parameter 'github' to be a non-empty string");
        expect(engineer).toThrowError(err);
      });
    });
    describe("getGithub", () => {
      it("should return the github of engineer when called", () => {
        const engineer = new Engineer("Doug", 3, "Doug@gmail.com", "Doug123");
        expect(engineer.getGithub()).toEqual("Doug123");
      });
    });
    describe("getRole", () => {
      it("should return the role of employee when called", () => {
        const engineer = new Engineer("Doug", 3, "Doug@gmail.com", "Doug123");
        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });