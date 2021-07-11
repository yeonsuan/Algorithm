function solution(arr,arr2){
    let answer=[];
    let p1=p2=0;
    arr.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);

    while(p1<arr.length && p2<arr2.length){
        if(arr[p1]===arr2[p2]){
            answer.push(arr[p1++]);
            p2++
        }else if(arr[p1]<arr2[p2]) p1++;
        else p2++
    }

    return answer;
}

let a = [1,3,9,5,2];
let b = [3,2,5,7,8];
console.log(solution(a,b));