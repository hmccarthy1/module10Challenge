//Requires 

const inquirer = require("inquirer");
const fs = require("fs");
const HTML = require('./src/htmlTemplate.js')

// setting up HTML path

const path = require('path');
const webFolder = path.resolve(__dirname, "Webpage");
const webPagePath = path.resolve(webFolder, "Webpage.html")

//add constructors

const TeamManager = require('./lib/teamManagerConstructor.js')
const Engineer = require('./lib/engineerConstructor');
const Intern = require('./lib/internConstructor');

// creates blank array for team members to be added into
teamArray = [];

// function for choosing an employee to add
function addEmployee() {
    inquirer.prompt([

        {
            type: 'list',
            message: 'What type of employee would you like to add?',
            name: 'employeeChoice',
            choices: ["Manager", "Engineer", "Intern", "I'm done adding employees"]
        }

    ]).then(function (answers) {
        switch (answers.employeeChoice) {
            case "Manager": 
                addTeamManager();
                break;
            
            case "Engineer":
                addEngineer();
                break;

            case "Intern": 
                addIntern();
                break;
            
            default: buildHTML();    
            }
    })}

// fucntion to add a manager

async function addTeamManager() {

    await
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerEmployeeID',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?"
            }

        ]).then((answers => {
            const manager = new TeamManager(answers.managerName, answers.managerEmployeeID, answers.managerEmail, answers.managerOfficeNumber);
           
            teamArray.push(manager);
          
            addEmployee();
        }))
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'engineerName'
        },
        {
            type: 'input', 
            message: "What is the Engineer's ID?",
            name: "engineerID"
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: "What is the Engineer's email?"
        },
        {
            name: "engineerGithub",
            type: "input",
            message: "What is the Engineer's GitHub username?"
        }
    ]).then( function (answers) {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(newEngineer);
        addEmployee();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "What is the Intern's name?"
        },
        {
            name: "internID",
            type: "input",
            message: "What is the Intern's employee ID?"
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is the Intern's email?"
        },
        {
            name: "internSchool",
            type: "input",
            message: "What is the Intern's school?"
        }
    ]).then( 
        function(answers) {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            addEmployee();
        }
    )
}

function buildHTML() {
    fs.writeFileSync(webPagePath, HTML(teamArray))
}



// Initializes
const init = function() {
addEmployee();


}

init()