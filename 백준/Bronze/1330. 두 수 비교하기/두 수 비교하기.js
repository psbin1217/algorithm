const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(filePath).toString().split(' ').map(Number);

const [A, B] = inputData;

if (A > B) console.log('>');
else if (A < B) console.log('<');
else if (A == B) console.log('==');