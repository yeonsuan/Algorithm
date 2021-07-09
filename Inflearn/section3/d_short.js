function solution(str,t) {
    let answer=[];
    let p=1000;
    for(let x of str){
        if(x===t){
            p=0;
            answer.push(p);
        }else{
            p++;
            answer.push(p);
        }
    }
    p=1000;
    for(let i=str.length-1; i>=0; i--){         //str.length는 길이고, -1하는 이유는 index 번호니까!!!!!!!
        if(str[i]===t){
            p=0;
            answer.push(p); 
        }else{
            p++;
            answer[i]=Math.min(answer[i],p); //왜 여기 들어가냐면 기존에꺼랑 방금 한거중에 골라야하니까!!!!
        }                                    //기존 위에꺼 해놓은 answer[i]랑 두번째에서 만든 P
    }
    return answer;
}

let str = 'teachermode';
console.log(solution(str,'e')); //그냥 값인 e가 아니라 문자열이니까 'e'라고 해줘야돼