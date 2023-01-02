const [a, b] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [b1, b2, b3] = b.split('');
let val1 = a * b3;
let val2 = a * b2;
let val3 = a * b1;
let sum = val1 + Number(`${val2}0`) + Number(`${val3}00`);
console.log(`${val1}\n${val2}\n${val3}\n${sum}`);