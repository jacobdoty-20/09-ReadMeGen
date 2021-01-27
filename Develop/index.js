// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'describe',
    },
    {
      type: 'input',
      message: 'What did you install?',
      name: 'installed',
    },
    {
        type: 'input',
        default: 'Bootcamp',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        default: 'Anonymous',
        message: 'Contributors',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests did you run?',
        name: 'tests',
    },
    {
        type: 'input',
        default: 'None',
        message: 'Thoughts and/or questions',
        name: 'questions',
    }
  ])
  .then(response => 
    // console.log(response)
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
    {
      let html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          ${response.username}
      </body>
      </html>`;
      fs.writeFile("index.html", html, (err) => {
        if(err){
          console.log(err);
        }
        else{
          console.log("created file");
        }
      })
    }
  );


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
