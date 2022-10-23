function solution(arr) {

    // min=arr[0]; 
    // i=1 이라고 해도됨.
    let answer, min = Number.MAX_SAFE_INTEGER; //안정적인 아주 큰 수
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;

    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

