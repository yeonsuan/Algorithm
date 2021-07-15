//학급 회장 (수업 코드)
//map을 만든 목적이 해시, key,value개념 모두 해시방법!
//이해 못함!!!!!!!!!!!!!! 내일 다시!!!!!!!!!!

const solution =(s)=> {
    let answer;
    let sH = new Map();
    for (let x of s){
        if(sH.has(x)){                  //x라는 문자의 키가 존재하냐?라는 의미 x가 ABCD..
            sH.set(x, xH.get(x) + 1);   //x라는 기존값을 set으로 '맵객체에 삽입'
        } else sH.set(x, 1);
    }

    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));