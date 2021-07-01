//문자찾기
function solution(str,n) {
    let answer=0;
    for(let x of str){
        if(x===n){
            answer++;
        }
    }
    return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str,'R'));