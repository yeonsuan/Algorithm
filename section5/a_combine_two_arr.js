//두 배열 합치기 spread operator 방식
function solution(arr,arr2){
    let answer;
    let newArr=[
        ...arr,
        ...arr2
    ];
    newArr.sort((a,b)=>a-b);
    answer=newArr;
    return answer;
}

let arr = [1,3,5];
let arr2 = [2,3,6,7,9];
console.log(solution(arr,arr2));