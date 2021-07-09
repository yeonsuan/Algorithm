// function solution(a,b) {
//     let answer=0;
//     for (let x of a){
//         if (x===b){answer++;}
//     }
//     return answer;
// }

// let word = "COMPUTERPROGRAMMING";   //내가 놓친거 문자는 무조건""
// console.log(solution(word,'R'));    //R도 문자니까 ''넣어주기

function solution(a,b) {
    let answer=0;
    for (let x of a){
        if (x===b){answer++}
    }
    return answer;
}
let string = 'COMPUTERPROGRAMING';
console.log(solution(string,'R'));