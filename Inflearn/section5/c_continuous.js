//연속 부분 수열 1 진짜진짜 왕 중요!!!! 투포인트 알고리즘 대표문제

function continuos(m,arr){
    let answer=0;
    let p1=p2=0;
    let sum=0;
 
    for(p1=0; p1<arr.length; p1++){
        sum+=arr[p1];
        if(sum===m)answer++;
        while(sum>=m){ //while을 쓰는 이유 : m 될때까지 계속 빼야하기때문에!(같아도)
            sum-=arr[p2++];
            if(sum===m)answer++; //위에서 빼놓고 또 같은지 확인하기
        }
    }

    return answer;
}

let a = [1,2,1,3,1,1,1,2];
console.log(continuos(6,a));