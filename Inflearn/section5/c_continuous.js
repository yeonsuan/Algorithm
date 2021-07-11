//연속 부분 수열 1

function continuos(m,arr){
    let answer=0;
    let p1=p2=0;
    let sum=0;
 
    for(p1=0; p1<arr.length; p1++){
        sum+=arr[p1];
        if(sum===m)answer++;
        while(sum>m){ //while을 쓰는 이유 ? : m보다 작아질때까지 계속 돌리기위해..?
            sum-=arr[p2++];
            if(sum===m)answer++;
        }
    }

    return answer;
}

let a = [1,2,1,3,1,1,1,2];
console.log(continuos(6,a));