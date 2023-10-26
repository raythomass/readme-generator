// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is thew title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the need and use for this application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage of this app?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What was contributed to this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the instructions for testing this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: [
            'Apache License 2.0',
            'GNU GPL v3',
            'MIT',
            'BSD 2',
            'BSD 3',
            'Boost Software 1.0',
            'Creative Commons Zero v1.0',
            'Eclipse Public License',
            'Mozilla Public License',
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? Do not use @',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = `README.md`;

    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log('Successful')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) =>{
            writeToFile('ExampleREADME.md',generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();




//REFERENCES

//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript.html



// // Inside of the backticks we use ${} to get access to the data inside of our object.
// const songSnippet = `${music.title} by ${music.artist} from the album ${music.album} is currently playing`;

// console.log(songSnippet)




// inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `README.md`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });




// // 1. spread
// const dragons = ["Drogon", "Viserion", "Rhaegal"];
// const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons


// console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]


// .then((response) =>
// response.confirm === response.password
//   ? console.log('Success!')
//   : console.log('You forgot your password already?!')
// );

