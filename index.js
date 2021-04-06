const inquirer = require("inquirer");
const fs = require("fs");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");

const managerArray = [];
const engineerArray = [];
const internArray = [];


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
            managerArray.push(teamManager);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                generateHTML(managerArray, engineerArray, internArray);
            }
    }
    )

function engineerQuestions() {
    inquirer
        .prompt(questions2)
        .then( (response) => 
        {
            let teamEngineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
            engineerArray.push(teamEngineer);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                generateHTML(managerArray, engineerArray, internArray)
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
            internArray.push(teamIntern);
            if (response.continue === "Engineer") {
                engineerQuestions();
            }
            else if (response.continue === "Intern") {
                internQuestions();
            }
            else if (response.continue === "I am finished") {
                generateHTML(managerArray, engineerArray, internArray);
            }
        }
        )
}

function generateHTML(managerArray, engineerArray, internArray) {
    let topHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/style.css" />
        <title>My Team</title>
      </head>
    
      <body>
        <header>
            <h1>My Team</h1>
        </header>

        <div class="employees row">
      `
    

    let manager = `
            <div class="employee-card col-12 col-md-6 col-lg-4">
                <div class="card-header">
                    <h4>
                        Name: ${managerArray[0].name}
                    </h4>
                    <h4>
                        <i class="fas fa-mug-hot"></i> Manager 
                    </h4>
                </div>
                <div class="card-info">
                    <p>
                        ID: ${managerArray[0].id}
                    </p>
                    <p>
                        Email: ${managerArray[0].email}
                    </p>
                    <p>
                        Office Number: ${managerArray[0].officeNumber}
                    </p>
                </div>
            </div>
    `
    topHTML += manager;

    for (i=0; i<engineerArray.length; i++) {
        let engineer = `
            <div class="employee-card col-12 col-md-6 col-lg-4">
                <div class="card-header">
                    <h4>
                        Name: ${engineerArray[i].name}
                    </h4>
                    <h4>
                        <i class="fas fa-glasses"></i> Engineer
                    </h4>
                </div>
                <div class="card-info">
                    <p>
                        ID: ${engineerArray[i].id}
                    </p>
                    <p>
                        Email: ${engineerArray[i].email}
                    </p>
                    <p>
                        Github: ${engineerArray[i].github}
                    </p>
                </div>
            </div>
        `
        topHTML += engineer;
    }
    for (i=0; i<internArray.length; i++) {
        let intern = `
            <div class="employee-card col-12 col-md-6 col-lg-4">
                <div class="card-header">
                    <h4>
                        Name: ${internArray[i].name}
                    </h4>
                    <h4>
                        <i class="fas fa-user-graduate"></i> Intern
                    </h4>
                </div>
                <div class="card-info">
                    <p>
                        ID: ${internArray[i].id}
                    </p>
                    <p>
                        Email: ${internArray[i].email}
                    </p>
                    <p>
                        School: ${internArray[i].school}
                    </p>
                </div>
            </div>
        `
        topHTML += intern; 
    }
    const bottomHTML = `
        </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="index.js"></script>
    </body>
    </html>
    `
    topHTML += bottomHTML;
    fs.writeFile('index.html', topHTML, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
}