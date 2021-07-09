function solution(s) {
    let answer;
    let regex=/[^0-9]/g;    
    answer=s.replace(regex,"");
    return answer;
}

let s = "g0en2T0s8eSoft";
console.log(solution(s));