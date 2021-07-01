function solution(n) {
    let answer;
    if (n%12>0){
        answer = parseInt(n/12)+1        //그리고 오늘 배운거 parseInt 정수만 내뱉기
    }else if (n%12===0){                 //=0 할 때 ===임을 잘 기억하자 ㅠ실수no
        answer = parseInt(n/12)
    }
    return answer;
}

const a = solution(173);
console.log(a);