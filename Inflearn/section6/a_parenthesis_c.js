//올바른 괄호 (review)

solution = (s) => {
    let answer = "YES";
    stack = [];
    for(let x of s){
        if(x === '(') stack.push(x);
        else{
            if(stack.length === 0) answer = "NO";
            stack.pop();
        }
        if(stack.length>0) answer = "NO";
    }
    return answer;
}

let a = "(()(()))(()";
console.log(solution(a));