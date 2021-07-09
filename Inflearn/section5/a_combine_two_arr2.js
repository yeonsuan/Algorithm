//두 배열 합치기 two pointers 방식
function solution(arr,arr2){
    let answer=[];
    let n = arr.length;
    let m = arr2.length;
    let p1=p2=0; //p1,p2는 두개 포인터
    while(p1<n && p2<m){
        if(arr[p1]<=arr2[p2]) answer.push(arr[p1]++);
        else answer.push(arr2[p2++]);
    }
    while(p1<n) answer.push(arr[p1++]);
    while(p2<m) answer.push(arr2[p2++]);
    
    return answer;
}

let a = [1,3,5];
let b = [2,3,6,7,9];
console.log(solution(a,b));