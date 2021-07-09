function solution(a) {
    let answer=0;
    for (let x of a ){                        //"x가 '대문자일때'를 어떻게" 적는지 모름
        if(x===x.toUpperCase()){answer++}     // x===x.toUpperCase()라고 적음.
    }
    return answer;
}

let str = 'KoreaTimeGood'
console.log(solution(str));