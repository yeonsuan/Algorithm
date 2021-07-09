//1부터 N까지의 합
function solution(n) {
    let answer;
    let sum=0;
    for(let i=0; i<=n; i++){
        sum=sum+i;     //5,6번 줄을 그냥 한번에 answer=answer+i로 할 수 있음
        answer=sum;
    }
    return answer;
}

console.log(solution(6));
console.log(solution(10));