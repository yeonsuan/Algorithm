function solution(s,arr) {
    let answer="";
    for(let i =0; i<arr.length; i++){
        //arr[i], i , arr.indexOf(arr[i])
        if(arr.indexOf(arr[i])===i){
            answer+=arr[i];
        }
    }
    return answer;
}

arr = ['good','time','good','time','student'];
console.log(solution(5,arr));