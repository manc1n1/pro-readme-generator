// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	'What is the project name?',
	'Please provide a short description of the project.',
	'What are the steps required to install the project?',
	'Please provide instructions and examples for use.',
	'Would you like other developers to contribute?',
	'Provide examples on how to run tests.',
	'Please choose a license:',
	'What branch do you work on?',
	'Enter GitHub username:',
	'Enter email address:',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), (err) =>
		err
			? console.log(err)
			: console.log(`Successfully created ${fileName}`),
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: questions[0],
			},
			{
				type: 'input',
				name: 'description',
				message: questions[1],
			},
			{
				type: 'input',
				name: 'install',
				message: questions[2],
			},
			{
				type: 'input',
				name: 'instructions',
				message: questions[3],
			},
			{
				type: 'input',
				name: 'contribute',
				message: questions[4],
			},
			{
				type: 'input',
				name: 'tests',
				message: questions[5],
			},
			{
				type: 'list',
				name: 'license',
				message: questions[6],
				choices: ['ISC', 'MIT', 'None'],
			},
			{
				type: 'list',
				name: 'branch',
				message: questions[7],
				choices: ['main', 'master'],
			},
			{
				type: 'input',
				name: 'github',
				message: questions[8],
			},
			{
				type: 'input',
				name: 'email',
				message: questions[9],
			},
		])
		.then((data) => {
			writeToFile('README.md', data);
		});
}

// Function call to initialize app
init();
