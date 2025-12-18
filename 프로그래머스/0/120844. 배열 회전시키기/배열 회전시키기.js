function solution(numbers, direction) {

    if(direction === "right"){
    /*
        1. 마지막 값을 꺼낸다
        2. 그 값을 맨 앞에 넣는다
     */
        const last = numbers.pop()
        numbers.unshift(last);
        
        return numbers;

    }else if(direction === "left"){
     /*
        1. 맨 앞에있는 값을 꺼낸다
        2. 그 값을 맨 뒤에 넣는다
     */
        const first = numbers.shift()
        numbers.push(first);
    
        return numbers;

    }

}