//10부제
function solution(n,arr) {
    let answer=0;
    for(let x of arr){
        if((x-n)%10===0){
            answer++;
        }
    }
    return answer;    
}

let arr = [25,23,11,47,53,17,33];
console.log(solution(3,arr));