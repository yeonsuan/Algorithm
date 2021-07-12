//연속 부분 수열 복습
function continuous(n,arr){
    let answer=0;
    let p1=p2=sum=0;

    for(p1=0; p1<arr.length; p1++){
        sum+=arr[p1];
        if(sum===n)answer++;
        while(sum>=n){
            sum-=arr[p2++];
            if(sum===n)answer++;
        }
    }
    return answer;
}

let a = [1,2,1,3,1,1,1,2];
console.log(continuous(6,a));