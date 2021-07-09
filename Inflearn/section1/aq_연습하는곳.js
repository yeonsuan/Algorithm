function solution(n,arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x.length>max){
            max = x.length;
            answer = x;
        }
    }
    return answer;
}

arr = ['teacher','time','student','beautiful','good'];
console.log(solution(5,arr));  