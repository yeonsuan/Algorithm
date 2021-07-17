//학급 회장 (수업 코드)
//map을 만든 목적이 해시, key,value개념 모두 해시방법!
//왜 new Map을 굳이 만들었을까? key,value값 둘다 뽑으려고?

const solution =(s)=> {
    let answer;
    let max=Number.MIN_SAFE_INTEGER;
    let sH = new Map(); //뉴 연산자 만들어서~(이걸 왜 만들었는지 생각해보기)
    for (let x of s){   //그안에서 포문 돌려서
        if(sH.has(x)){
            sH.set(x, sH.get(x) + 1);   
            //x 기존값(ABCD..)이 있을 경우에는 기존값에다 1 추가!!!
        } else sH.set(x, 1); //기존값 없으면 그냥 하나~
        for (let [key,value] of sH){ //key가 문자, value가 몇개있는지 기록하는거
            if(value>max){
                max=value;
                answer=key;
            }
        }
    }
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));