function solution(arr, n) {

    return arr.map((el,idx)=>{
        if(arr.length % 2 === 0){
            if(idx % 2 === 1){
               el += n;
            }
            return el;
        }else if(arr.length % 2 === 1){
            if(idx % 2 === 0){
                 el +=n;
            }
            return el;
        }
    });
}