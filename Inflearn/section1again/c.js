//연필 개수
function solution(n) {
    let answer;
    if(n%12===0){
        answer=n/12;
    }else{answer=parseInt(n/12)+1;}
    return answer;
}

console.log(solution(25));
console.log(solution(178));