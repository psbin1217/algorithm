// function solution(a, b, c) {
//     let answer = "yes", max;
//     let sum = a + b + c;
//     if (a < b) max = b;
//     else max = a;
//     if (b < c) max = c;
//     if ((sum - max) <= max) answer = "no";
//     return answer;
// };
// consol.log(solution(8, 7, 10));

function solution(a, b, c) {
    let answer = "YES", max;
    let tot = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if (tot - max <= max) answer = "NO";
    return answer;
}

console.log(solution(13, 33, 17));
