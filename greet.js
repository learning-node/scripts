const arg = process.argv[2];

function print(name) {
    return 'Hello ' + name;
}
if (__filename === process.argv[1]) {
    console.log(print(arg));
}
module.exports = print;
