function solution(n,arr) {
    let answer=[];
    for(let x of arr){
        if(n<=x){answer.push(x);}
    }
    return answer;
}
arr = [7,3,9,5,6,12];
console.log(solution(6,arr));