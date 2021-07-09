function solution(s) {
    let answer='';
    for(let x of s){
        if(!isNaN(x)){answer+=x;}
    }
    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));