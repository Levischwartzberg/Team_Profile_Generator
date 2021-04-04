const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");

const employeeArray = [];

const questions1 = [
    {
        type: 'input',
        message: 'Enter the Team Managers name, employee ID, email, and office number. Press Enter to continue.',
        name: 'null',
    },
    {
        type: 'input',
        message: 'Manager Name:',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Manager ID:',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'Manager Email:',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Manager Office Number:',
        name: 'managerOffice',
    },
    {
        type: 'list',
        message: 'Enter in another employee, or choose, "I am finished".',
        name: 'continue',
        choices: ["Engineer", "Intern", "I am finished"]
    },
]

questions2 = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Engineer ID:',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'Engineer Email:',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Engineer Github Username:',
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Enter in another employee, or choose, "I am finished".',
        name: 'continue',
        choices: ["Engineer", "Intern", "I am finished"]
    },
]

questions3 = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'internID',
    },
    {
        type: 'input',
        message: 'Intern Email:',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Intern School:',
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Enter in another employee, or choose, "I am finished".',
        name: 'continue',
        choices: ["Engineer", "Intern", "I am finished"]
    },
]

inquirer
    .prompt(questions1)
    .then( (response) =>
        {
            const teamManager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
            employeeArray.push(teamManager);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                constructHTML(employeeArray);
            }
    }
    )


function constructHTML(employeeArray) {

}

function engineerQuestions() {
    inquirer
        .prompt(questions2)
        .then( (response) => 
        {
            let teamEngineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.enigneerGithub);
            employeeArray.push(teamEngineer);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                constructHTML(employeeArray);
                console.log(employeeArray);
            }
        }
        )
}

function internQuestions() {
    inquirer
        .prompt(questions3)
        .then( (response) => 
        {
            let teamIntern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
            employeeArray.push(teamIntern);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                constructHTML(employeeArray);
                console.log(employeeArray);
            }
        }
        )
}