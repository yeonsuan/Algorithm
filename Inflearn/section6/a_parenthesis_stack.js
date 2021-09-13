//올바른 괄호 (STACK_Last In First Out)
//스택 : 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 넣은 데이터 확인 peek

solution = (s) => {
    let answer="YES";
    stack=[];
    for(let x of s){
        if(x==='(') stack.push(x);
        else{
            if(stack.length===0) return "NO"; // '('를 빼려고 봤는데 ')'부터 시작한 경우! 
            stack.pop();
        }
    }
    if(stack.length>0) return "NO";

    return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
