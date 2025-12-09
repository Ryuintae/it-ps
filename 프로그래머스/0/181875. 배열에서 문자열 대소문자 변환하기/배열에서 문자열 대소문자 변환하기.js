function solution(strArr) {
    // map 의 el 와 idx 가지고 삼항 연산자 구현

    strArr.map((el, idx) => {
        // 어떻게 해당 idx 에만 접근했었지를 생각
        idx % 2 === 0 ? strArr[idx] = el.toLowerCase() : strArr[idx] = el.toUpperCase();
    });

    
//     for(let i = 0; i<strArr.length; i++){
//         if(i%2===0){
//             strArr[i] = strArr[i].toLowerCase();
//         }else if(i%2===1){
//             strArr[i] = strArr[i].toUpperCase();

//         }
//     }
    
    
    return strArr;

}