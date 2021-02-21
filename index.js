
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
  {
    type: 'input',
    name: 'credits',
    message: 'Please enter your credits.',
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
},
  
  {
    type: 'input',
    name: 'githublink',
    message: 'Please enter your github profile link',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email',
  },
  {
    type: 'input',
    name: 'userName',
    message: 'Please enter your name',
  },
];
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      let badge = "";
      if(response.license == "MIT"){
          badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
      }else if (response.license == "APACHE 2.0"){
          badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      }else if (response.license == "GPL 3.0"){
          badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      }else if (response.license == "BSD 3"){
          badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      }
const string = 
    `# ${response.projectName} ${badge}
## Description 
* ${response.description}.
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
* ${response.installInstruction}.
## Usage
* ${response.usage}.
## Credits

* ${response.credits}.

## License

* ${response.license}.


## Questions

If you have questions contact me on [GitHub](${response.githublink}) or contact ${response.userName} at ${response.email}.

`
    fs.writeFile('README.md', string, (err) =>
    err ? console.error(err) : console.log('README Generated!')
    );
  
});
}
// Function call to initialize app
init();
