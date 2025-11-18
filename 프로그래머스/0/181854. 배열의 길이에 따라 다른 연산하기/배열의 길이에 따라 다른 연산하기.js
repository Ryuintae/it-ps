function solution(arr, n) {
    let answer = [];
    let x = arr.length % 2 === 1;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (x) {
            // 배열 길이가 홀수 → 짝수 인덱스만 더함
            if (i % 2 === 0) {
                temp = temp + n;
            }
        } else {
            // 배열 길이가 짝수 → 홀수 인덱스만 더함
            if (i % 2 === 1) {
                temp = temp + n;
            }
        }

        answer.push(temp);
    }

    return answer;
}