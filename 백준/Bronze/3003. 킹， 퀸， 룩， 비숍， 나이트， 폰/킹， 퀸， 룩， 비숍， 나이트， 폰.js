const n = require('fs').readFileSync('dev/stdin', 'utf8');
const arr = n.split(' ');
const arr0 = 1 - arr[0]
const arr1 = 1 - arr[1]
const arr2 = 2 - arr[2]
const arr3 = 2 - arr[3]
const arr4 = 2 - arr[4]
const arr5 = 8 - arr[5]
const answer = '' + arr0 + ' ' + arr1 + ' ' + arr2 + ' ' + arr3 + ' ' + arr4 + ' ' + arr5;
console.log(answer);