const greet = require('./greet.js');
const calc = require('./calc.js');
const name = process.argv[2];
const op = process.argv[3];
const num1 = Number(process.argv[4]);
const num2 = Number(process.argv[5]);

console.log(greet(name) + ' ' + calc(op, num1, num2));