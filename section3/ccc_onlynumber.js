function solution(s) {
    let answer=0;
    for(let x of s){
        if(!isNaN(x)){
            answer=answer*10+Number(x);    //이거 하면 앞에 0이 다 사라짐!!!
        }
    }
    return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));