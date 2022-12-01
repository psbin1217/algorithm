const n = require('fs').readFileSync('dev/stdin', 'utf8');
const arr = n.split(' ');
console.log(arr[0] / arr[1]);