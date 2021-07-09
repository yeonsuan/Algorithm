//대소문자 변환
function solution(s) {
    let answer='';
    for(let x of s){
        if(x===x.toUpperCase()){
            answer+=x.toLowerCase();
        }else(answer+=x.toUpperCase())
    }
    return answer;
}

let str = 'StuDY';
console.log(solution(str));