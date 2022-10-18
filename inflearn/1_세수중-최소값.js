
function solution(a, b, c) {
    let answer;
    if (a > b) answer = b;
    else answer = a;
    if (c < answer) answer = c;
    return answer;
}

// console.log(solution(8, 8, 7));

function getMin(a, b, c) {
    return Math.min(a, b, c)
}

console.log(getMin(5, 2, 3))