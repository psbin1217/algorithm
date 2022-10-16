//아래 3가지 다 같은 함수
//1. 함수의 선언식
function solution(n) {
    return Math.ceil(n / 12);
}

//2.함수의 표현식
const solution = () => Math.ceil(n / 12);

//3. 내가 짠 코드
function solution(n) {
    let division = n % 12 //나머지 구하는 연산자 %
    let answer;
    if (division > 0) {
        answer = parseInt(n / 12) + 1;
    } else {
        answer = parseInt(n / 12);
    }
    return answer;
}
console.log(solution(27));
