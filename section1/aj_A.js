// // function solution(s) {
// //     let answer="";
// //     for (let x of s){
// //         if (x==='A'){
// //             answer=answer+'#';}
// //             else {answer=answer+x;}
// //     }
// //     return answer;
// // }

// // let str = "BANANA";
// // console.log(solution(str));

// function solution(s) {
//     let answer="";
//     for (let x of s){
//         if (x==='A'){
//             answer = answer + '#'
//         }else {answer = answer + x};
//     }
//     return answer;
// }

// let str='APPLE';
// console.log(solution(str));


function solution(a) {
    let answer="";
    for (let x of a){
        if (x==='A'){
            answer=answer +'#';
        }else {answer=answer+x};
    }
    return answer;    
}
let str = 'BANANA';
console.log(solution(str));