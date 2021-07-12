//연속 부분 수열2 (강의 학습)
function solution(n,arr){
    let answer=0;                   //카운팅이니까!
    let p1=p2=sum=0;

    for(p1=0; p1<arr.length; p1++){ //돌려서
        sum+=arr[p1];               //p1을 키우면서 계속 합더하고
        while(sum>n){               //더하는 도중 n보다 크면
            sum-=arr[p2++];         //왼쪽꺼 움직여서 빼!
        }                           
        answer+=p1-p2+1;            //answer 갯수는..? 이부분 내일 다시 생각하기
    }
    return answer;
}

let a = [1,3,1,2,3];
console.log(solution(5,a));