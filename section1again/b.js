//삼각형 판별하기
function solution(a,b,c) {
    let answer='';
    if(a>b+c || b>a+c || c>a+b){
        answer+='NO';
    }else{answer+='YES';}

    return answer;
}


console.log(solution(13,33,17));
console.log(solution(6,7,11));

