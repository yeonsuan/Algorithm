function solution(s) {
    let answer='YES';
    s=s.toLowerCase();
    let len = s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i] !==s[len-i-1]){answer='NO';} //answer 노 도 가능!
    }

    return answer;
}
let s='gooD';
console.log(solution(s));