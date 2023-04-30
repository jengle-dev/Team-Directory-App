const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//define the output, where will it be generated
const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "team.html"); //recognizes a folder named output directory

const render = require("./src/html-layout.js");

//create empty arrays team members and Ids
const teamMembers = [];
const idArray = [];
// const managerId = [];

function appMenu() {
    //use inquirer syntax
    // (Name, managerID, email, officeNumber)
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                //validation suggested, not required, check user input
                validate: answer => {
                    // don't want to accept no response, empty string
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                },
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's employee ID number?",
                //validation suggested, not required, check user input
                validate: answer => {
                    var pass = !isNaN(answer) && ('answer' > 0)
                    if (pass) {
                        return true;
                    }
                    return "Please enter an employee ID number greater than zero.";
                },
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email address?",
                //validation suggested, not required, check user input
                validate: answer => {
                    var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)

                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                },
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office ID number?",
                //validation suggested, not required, check user input
                validate: answer => {
                    var pass = !isNaN(answer) && ('answer' > 0)
                    if (pass) {
                        return true;
                    }
                    return "Please enter an office ID number greater than zero.";
                },
            },
        ])
            // answers provided function
            // push to the array of teamMembers
            // push managerId to idArray
            // call the create team
            .then(answers => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.officeNumber);
                teamMembers.push(manager);
                idArray.push(managerId);

                createTeam();
            });
    }

    // create team function with inquirer
    function createTeam() {
        inquirer.prompt([
            //choices of roles
            {
                type: "list",
                name: "roleChoice",
                message: "Which employee role do you want to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm done. No more team members to add."
                ]
            }
        ])
            .then(userChoice => {
                //switch statement
                switch (userChoice.roleChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    // create a new Engineer, (Name, employeeId, email, github)
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineer's name?",
                //validation suggested, not required, check user input
                validate: answer => {
                    // don't want to accept no response, empty string
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's employee ID number?",
                //validation suggested, not required, check user input
                // employee ids need to be unique
                validate: answer => {
                    var pass = !isNaN(answer) && ('answer' > 0)
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. Please enter a different employee ID."
                        } else {
                            return true;
                        }
                    }
                    return "Please enter an unique employee ID number greater than zero.";
                },
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email address?",
                //validation suggested, not required, check user input
                validate: answer => {
                    var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)

                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                },
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the Engineer's GitHub username?",
                //validation suggested, not required, check user input
                //  GitHub
                //   Min: 1
                //   Max: 39
                //   Can contain: a-z A-Z 0-9 -    will add future state
                //   Other: Can not start with a dash   will add future state

                validate: answer => {
                    // don't want to accept no response, empty string
                    if (answer !== "" && answer.length >= 1 && answer.length <= 39) {
                        return true;
                    }
                    return "Please enter a valid GitHub username. Username has a length between 1 and 39 characters.";
                }
            }
        ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerId,
                    answers.engineerGitHub);
                teamMembers.push(engineer);
                idArray.push(engineerId);

                createTeam();
            });
    }

    // create a new Intern, (Name, employeeId, email, school)
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Intern's name?",
                //validation suggested, not required, check user input
                validate: answer => {
                    // don't want to accept no response, empty string
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Intern's employee ID number?",
                //validation suggested, not required, check user input
                // employee ids need to be unique
                validate: answer => {
                    var pass = !isNaN(answer) && ('answer' > 0)
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. Please enter a different employee ID."
                        } else {
                            return true;
                        }
                    }
                    return "Please enter an unique employee ID number greater than zero.";
                },
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email address?",
                //validation suggested, not required, check user input
                validate: answer => {
                    var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)

                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                },
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the Intern's current school?",
                //validation suggested, not required, check user input
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                },
            }
        ])
        .then(answers => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    // function to build the team
    function buildTeam() {
        //what's the directory this needs to go to? does it exist already
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(OUTPUT_PATH, render(teamMembers), "utf-8");
    }
    
    createManager();
}

appMenu();