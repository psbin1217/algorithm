const str = require('fs').readFileSync('/dev/stdin', 'utf8');
const arr = str.split(' ');
const A = Number(arr[0]);
const B = Number(arr[1]);
console.log(A - B);