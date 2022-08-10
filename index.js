// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Constructors
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template.js');

// Empty arrays for employees
const employees = [];

// Add manager option
const addManager = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the team manager's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the team manager's ID number",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
                    return "Please enter the ID number";
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the team manager's email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    return "Please enter an email";
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the team manager's office number",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    }
                    return "Please enter the office number";
                }
            }
        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
           
            employees.push(manager);
            addTeam();
        })
}

// After the manager has been completed, the choice to add team members is given
const addTeam = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeOption',
                message: "Please choose the next team member's position or finish building your team",
                choices: ['Engineer', 'Intern', 'Finish']
            }
        ])
        .then(data => {
            if (data.employeeOption === 'Engineer') {
                addEngineer();
            } else if (data.employeeOption === 'Intern') {
                addIntern();
            } else {
                generatehtml();
            }
        })
}

// Add engineer option
const addEngineer = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                messge: "Please enter the engineer's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    }
                    return "Please enter a name"
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the engineer's ID number",
                validate: idInput => {
                    if(idInput) {
                        return true;
                    }
                    return "Please enter the ID number"
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the engineer's email",
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the engineer's GitHub username",
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    }
                    return "Please enter the GitHub username"
                }
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
           
            employees.push(engineer);
            addTeam();
        })
}

// Add intern option
const addIntern = () => {
    console.log("---------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's ID number",
                validate: idInput => {
                    if(idInput) {
                        return true;
                    }
                    return "Please enter the ID number"
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's email",
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    }
                    return "Please enter a valid email"
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school name",
                validate: schoolInput => {
                    if(schoolInput) {
                        return true;
                    }
                    return "Please enter the school name"
                }
            }
        ])
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);

            employees.push(intern);
            addTeam();
        })
}

// Create html after collecting data
function generatehtml() {
    fs.writeFileSync(outputPath, render(employees), "utf-8");
    console.log('Successfully created index.html')
    process.exit(0);
}

addManager();