function solution(arr) {
    let answer;
    let sum=0;
    for(let x of arr){
        sum=sum+x;
        if (sum===100) break;
    }
    
    return answer;
}
    
arr = [20,7,23,19,10,15,25,8,13];
console.log(solution(arr))