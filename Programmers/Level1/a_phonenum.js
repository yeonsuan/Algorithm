//핸드폰 번호 가리기

function solution(phone_number) {
    let answer='';
    let s = phone_number;
    for(let i=0; i<s.length; i++){
        if(i<=s.length-4){         //이거진짜 잘 모르겠는데..콘솔에 찍어보면서 그냥해!
            answer+='*';
        }else{answer+=s[i];}
    }
    return answer;
}

let str = "01033334444";
console.log(solution(str));