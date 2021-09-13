//올바른 괄호 (내가 먼저 짠 코드..)

solution = (str) => {
    let answer;
    for(let i = 0; i<str.length; i++){
        if(str[i]==="("){
            count++;
        }
    }
    for(let j = 0; j<str.length; j++){
        if(str[j]===")"){
            count++;
        }
    }
    return answer;
}

let a = "(()(()))(()";
console.log(solution(a));