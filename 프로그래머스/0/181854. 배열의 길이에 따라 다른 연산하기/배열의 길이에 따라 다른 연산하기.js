function solution(arr, n) {
    // 결과 배열을 원본 복사로 시작
    let temp = [...arr];

    for (let i = 0; i < arr.length; i++) {
        // 배열 길이가 짝수면 홀수 인덱스에 n 더하기
        if (arr.length % 2 === 0 && i % 2 === 1) {
            temp[i] = arr[i] + n;
        }
        // 배열 길이가 홀수면 짝수 인덱스에 n 더하기
        else if (arr.length % 2 === 1 && i % 2 === 0) {
            temp[i] = arr[i] + n;
        }
    }

    return temp;
}
