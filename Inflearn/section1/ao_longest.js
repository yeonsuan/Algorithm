// function solution(n,object) {
//     let answer;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let x of object){
//         if(x<max)
//     }
//     return answer;
// }
// object = [teacher,time,student,beautiful,good];
// console.log(solution(5,object));

function solution(s) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let x of s){
        if(x.length>max){
            max = x.length;
            answer =x;
        }
    }
    return answer;
}

let str = ['teacher','time','student','beautiful','good'];
console.log(solution(str));