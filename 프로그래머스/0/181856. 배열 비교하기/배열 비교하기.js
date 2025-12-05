function solution(arr1, arr2) {
    
    let ar1 = 0;
    let ar2 = 0;
    
    if(arr1.length < arr2.length){
        return -1;
    }else if(arr1.length > arr2.length){
        return 1;
    }else if(arr1.length === arr2.length){
        arr1.forEach((el)=>{
            ar1 += el;
        })
        arr2.forEach((el)=>{
            ar2 += el;
        })
        if(ar1<ar2){
            return -1;
        }else if(ar1>ar2){
            return 1;
        }else{
          return 0;
        }
    }

}