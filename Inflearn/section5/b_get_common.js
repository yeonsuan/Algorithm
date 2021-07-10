//공통 원소 구하기 (꼭 표 그려서 어떻게 돌아가는지 체크하기)
function solution(arr,arr2){
    let answer=[];
    arr.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    let n = arr.length;
    let m = arr2.length;
    let p1=p2=0;

    while(p1<n && p2<m){
        if(arr[p1] === arr2[p2]){
            answer.push(arr[p1++]); //여기까진 반복문과 같음
            p2++
        }else if(arr[p1]<arr2[p2])p1++; //이 부분 생각하기!
        else p2++;

    }
    return answer;
}

let a = [1,3,9,5,2];
let b = [3,2,5,7,8];
console.log(solution(a,b));