//중복 문자 제거
function solution(s) {
    let answer='';
    for(let i=0; i<=s.length; i++){
        if(i===s.indexOf(s[i])){ //index쓰는방법 제대로 다시 알기.
            answer+=s[i];
        }
    }
    return answer;
}

let str ='ksekkset';
console.log(solution(str));