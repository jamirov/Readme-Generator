
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectName',
    message: 'What is the project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write description for your project',
  },
  {
    type: 'input',
    name: 'installInstruction',
    message: 'Please write Installations Instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please write Usage information',
  },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
const string = 
    `# ${response.projectName}
## Description 
${response.description}
## Installation
${response.installInstruction}
## Usage
${response.usage}`
    
    fs.writeFile('README.md', string, (err) =>
    err ? console.error(err) : console.log('README Generated!')
    );
    
});
}

// Function call to initialize app
init();
