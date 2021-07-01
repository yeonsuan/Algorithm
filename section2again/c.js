//등수 구하기
function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x<max){
            max=x;
            
        }
    }
    return answer;
}
let arr=[87,89,92,100,76];
console.log(solution(arr));