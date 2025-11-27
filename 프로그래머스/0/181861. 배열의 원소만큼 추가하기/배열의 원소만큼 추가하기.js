function solution(arr) {
  /* 
  1. 빈 배열 변수 생성
  2. 배열의 길이 만큼 반복
  3. arr[i]의 숫자 만큼 push하는 로직
  4. count가 arr의 i번째 원소보다 작다면 i 만큼 계속 반복해서 넣어주기
  */
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    while (count < arr[i]) {
      temp.push(arr[i])
      count++;
    }
  }
  return temp;
}
