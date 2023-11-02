const inquirer = require('inquirer'); 
const svg = require('svg'); 
const fs = require('fs'); 

// Define 
const inquirer = [
    {
        type : 'input',
        name: 'text',
        messsage: 'Enter the text for your logo:',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Choose a color(',
    }
];

// This function is used to make and save a svg file
function generateLogo(text, color) {
    // Generate an SVG based text logo
    const captcha = svg.create({
        size: 4,
        noise: 2,
        background: color,
    });

    // Save the SVG logo to a file
fs.writeFileSync('logo.svg', svg.data, 'utf8');
console.log('Logo saved as logo.svg');

}
// Ask the User to input Information/-
inquirer.prompt(questions).then(function (answer) {
generateLogo(answer.text, answers.color);
});