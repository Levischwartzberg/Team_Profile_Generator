const Intern = require("../classes/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with a name, age, email, and school if provided valid arguments", () => {
        const intern = new Intern("Doug", 3, "Doug@gmail.com", "Hard Knocks")
        expect(intern.name).toEqual("Doug");
        expect(intern.id).toEqual(3);
        expect(intern.email).toEqual("Doug@gmail.com");
        expect(intern.school).toEqual("Hard Knocks");
      });
  
      it("should throw an error if provided no arguments", () => {
        const intern = () => new Intern();
        expect(intern).toThrow();
      });
      it("should throw an error if 'name' is not a string", () => {
        const intern = () => new Intern(3, 2, "Doug@gmail.com", "Hard Knocks");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if 'name' is undefined", () => {
        const intern = () => new Intern(undefined, 2, "Doug@gmail.com", "Hard Knocks");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const intern = () => new Intern("Doug", "", "Doug@gmail.com", "Hard Knocks");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided an id", () => {
        const intern = () => new Intern("Doug", undefined, "Doug@gmail.com", "Hard Knocks");
        const err = new Error("Expected parameter 'id' to be a non-empty string or number");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const intern = () => new Intern("Doug", 3, undefined, "Hard Knocks");
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided an email", () => {
        const intern = () => new Intern("Doug", 3, "", "Hard Knocks");
        const err = new Error("Expected parameter 'email' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided a school", () => {
        const intern = () => new Intern("Doug", 3, "Doug@gmail.com");
        const err = new Error("Expected parameter 'school' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
      it("should throw an error if not provided a school", () => {
        const intern = () => new Intern("Doug", 3, "Doug@gmail.com", "");
        const err = new Error("Expected parameter 'school' to be a non-empty string");
        expect(intern).toThrowError(err);
      });
    });
    describe("getRole", () => {
      it("should return the role of employee when called", () => {
        const intern = new Intern("Doug", 3, "Doug@gmail.com", "Hard Knocks");
        expect(intern.getRole()).toEqual("Intern");
      });
    });
    describe("getSchool", () => {
        it("should return the role of employee when called", () => {
          const intern = new Intern("Doug", 3, "Doug@gmail.com", "Hard Knocks");
          expect(intern.getSchool()).toEqual("Hard Knocks");
        });
      });
  });