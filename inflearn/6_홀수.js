function solution(arr) {
    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (x % 2 == 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    return answer;
}

arr = [12, 77, 38, 41, 58, 33, 99];
console.log(solution(arr));