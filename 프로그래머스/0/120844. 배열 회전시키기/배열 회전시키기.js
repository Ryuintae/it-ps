function solution(numbers, direction) {
    if(direction === 'right'){
        // 오른쪽일땐 맨 뒤에 값 하나 추출
        // 그 값을 -1을 제외한 앞에 값 확인
        // concat 으로 lastvalue부터 뒤에 값을 concat 으로 추가
        const lastValue = numbers.slice(-1);

        // 1번째 배열부터 나머지 값 추출
        const anotherValue = numbers.slice(0,-1);
        return lastValue.concat(anotherValue);

    }else if(direction === 'left'){
        // 왼쪽일땐 맨 앞에 값을 추출
        // 그 값을 맨 뒤에 추가
        const firstValue = numbers.slice(0,1);

        // 1번째 배열부터 나머지 값 추출
        const anotherValue = numbers.slice(1);

        return anotherValue.concat(firstValue);
    }
}