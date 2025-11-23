function solution(arr, n) {
    // arr 길이 짝수 홀수 구분
    // 1. arr 길이가 홀수이면 arr의 짝수 인덱스 위치에 n 더하기
    // 2. arr 길이가 짝수라면 arr의 홀수 인덱스 위치에 n 더하기

    // arr의 idx 가 짝수이거나 홀수일 때를 구분해서 n 값만 더하기

    if (arr.length % 2 === 0) {
        // 배열 길이가 짝수 일때 홀수 인덱스에만 n 값 더하기
        for(let i = 0; i<arr.length; i++){
            // 여기서 idx가 홀수에만 넣어야함
            if (i% 2 ===1){
                arr[i]+=n;
            }
        }
    } else if (arr.length % 2 === 1){
        for(let i = 0; i<arr.length; i++){
            // 여기서 idx가 짝수에만 넣어야함
            if (i% 2 ===0){
                arr[i]+=n;
            }

        }
    }

        return arr;
}