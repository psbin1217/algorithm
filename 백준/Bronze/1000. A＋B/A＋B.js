const n = require('fs').readFileSync('/dev/stdin', 'utf8')
const arr = n.split(' '); 
console.log(Number(arr[0]) + Number(arr[1]));