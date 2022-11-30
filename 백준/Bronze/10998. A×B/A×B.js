const str = require('fs').readFileSync('dev/stdin', 'utf8');
const A = str[0];
const B = str[2];
console.log(A * B);