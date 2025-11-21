function solution(arr, delete_list) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        // arr[i]가 delete_list 안에 없으면 추가
        if (!delete_list.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }

    return answer;
}