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

// Function to generate and save the logo as an SVG file
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