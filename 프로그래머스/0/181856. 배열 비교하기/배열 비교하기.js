function solution(arr1, arr2) {
    // 1. 배열 길이 값 비교 (길이가 큰 쪽이 무조건 더 값이 큼)
    // 2. 배열의 길이가 같다면 배열 원소의 합을 비교
    // 3. arr1 이 크다면 1 / arr2 가 크다면 -1 / 같다면 0

    let totArr1 = 0;
    let totalArr2= 0;

    if (arr1.length === arr2.length){
        // 배열 원소의 합을 비교
        arr1.forEach((el)=>{
            totArr1 += el;
        });
        console.log(totArr1)
        arr2.forEach((el)=>{
            totalArr2 +=el;
        })
        if (totArr1<totalArr2){
            return -1;
        }else if (totArr1>totalArr2){
            return 1;
        }
        return 0;
    }else if (arr1.length<arr2.length){
        return -1;
    }else if (arr1.length>arr2.length){
        return 1;
    }

}