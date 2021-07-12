//연속 부분 수열2 내가 풀어본건데 틀림.
function solution(n,arr){
    let answer=0;
    let p1=p2=sum=0;

    for(p1=0; p1<arr.length; p1++){
        if(p1<=n)answer++;
        sum+=arr[p1];
        if(sum<=n)answer++;
        while(sum>n){
            sum-=arr[p2++];
            if(sum<=n)answer++;
        }
    }
    return answer;
}

let a = [1,3,1,2,3];
console.log(solution(5,a));