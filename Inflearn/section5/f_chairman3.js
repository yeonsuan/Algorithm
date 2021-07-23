//학급 회장 수안 혼자 복습! 오늘 마스터할거야~

solution = (s) => {
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)){
            sH.set(x, sH.get(x)+1)
        }else {sH.set(x , 1)}
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let [key,value] of sH){
        if(value>max){
            max = value;
            answer = key;
        }
    }

    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));