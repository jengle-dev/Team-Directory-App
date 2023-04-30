const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//define the output, where will it be generated
const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "team.html"); //recognizes a folder named output directory

const render = require("./src/index");

//create empty arrays team members and Ids
const teamMembers = [];
const employeeId = [];

function appMenu() {
    //use inquirer syntax

    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                //validation suggested, not required, check user input
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                },
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
                //validation suggested, not required, check user input
                validate: answer => {
                    if (pass) {
                        return true;
                    }
                    return "Please enter an ID number greater than zero.";
                },
            },
        ])
    }
}

appMenu();