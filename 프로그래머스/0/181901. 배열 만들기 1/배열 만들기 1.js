 function solution(n, k) {
            // k 의 배수로 n의 값 출력
            var answer = [];
            for (let  i = k; i<=n; i+=k){
                answer.push(i)
            }
            return answer;
}