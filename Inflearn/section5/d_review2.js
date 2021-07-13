//연속 부분 수열2

const solution = (n, arr) => {
    let answer=0;
    let p1=p2=sum=0;
    
    for(p1=0; p1<arr.length; p1++){
        sum+=arr[p1];
        while(sum>n){                //직접 써보면서 확인하면, 같을 땐 p1을 키우고 커졌을때만 p2를 키운다!
            sum-=arr[p2++];
        }
        answer+=p1-p2+1;
    }
    return answer;
}

let a = [1,3,1,2,3];
console.log(solution(5,a));