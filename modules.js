const os = require('os');
const {people, number} = require('./people'); // when you want to use code defined in another file....

console.log(people,number);
console.log(os.homedir(), os.hostname(), os.platform());
