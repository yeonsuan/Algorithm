//최솟값 구하기
function solution(arr) {
    let answer;
    let min = Number.MAX_SAFE_INTEGER
    for(let x of arr){
        if(x<min){
            min=x;
            answer=min;
        }
    }
    return answer;
}

let num = [5,12,7,11,20,15,17];
console.log(solution(num));