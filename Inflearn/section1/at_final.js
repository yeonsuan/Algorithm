function solution(n, arr) {
    let answer=[];
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i])===i){
            answer.push(arr[i]);
        }
    }
    return answer;    
}
arr = ['good','time','good','time','student'];
console.log(solution(5,arr));