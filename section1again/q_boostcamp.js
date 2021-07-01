function countOf(arr, value) {
    let count=0;
    arr.forEach(element=>{
        if(element == value) count++;
    });
    return count;
}

function solution(arr) {
    var answer=[];
    var set = new Set([]);
    arr.forEach(element=>{
        if(set.has(element)) return;
        set.add(element);
        count = countOf(arr,element);
        if(count>1) answer.push(count);
    });
    if(answer.length===0) answer.push(-1);
    return answer;
}

let arr=[1,2,3,3,3,3,4,4];
console.log(solution(arr));