const op = process.argv[2]; // 'add'
const num1 = Number(process.argv[3]); // 4
const num2 = Number(process.argv[4]); // 8

function calc(operation, n1, n2) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n1 / n2;
        default: console.log('Need add, subtract, multiply, or divide');
    }
}
if (__filename === process.argv[1]) {
    console.log(calc(op, num1, num2));
}
module.exports = calc;
