const inquirer = require('inquirer'); 
const svgCaptcha = require('svg-captcha'); 
const fs = require('fs'); 

// Define a array of questions of questions for user prompts
const questions = [
    {
        type : 'input',
        name: 'text',
        messsage: 'Enter the text for your logo:',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Choose a color(e.g.,#RRGGBB)',
    }
];

// function to generate and save the logo as an SVG  file
function generateLogo(text, color) {
    // Generate an SVG based text logo
    const captcha = svgCaptcha.create({
        size: 4,
        noise: 2,
        background: color,
    });

    // Save the SVG logo to a file
fs.writeFileSync('logo.svg', captcha.data, 'utf8');
console.log('Logo saved as logo.svg');

}
// Ask the User to input Information/---Not using arrow because it seems to be related to the arrow function syntax,  which is not supported in older versions of Node.js or environments that don't support ES6 (ECMAScript 2015) syntax
inquirer.prompt(questions).then(function (answer) {
generateLogo(answer.text, answers.color);
});