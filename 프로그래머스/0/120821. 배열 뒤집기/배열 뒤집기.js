function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= num_list.length; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}
