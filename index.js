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

// Function