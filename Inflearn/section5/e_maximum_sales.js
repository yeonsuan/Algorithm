//최대 매출 (내가 짠 코드 : 질문 요청 중)
const maximumsales = (n,arr) => {
    let answer;
    let p1=p2=sum=0;
    let max=Number.MIN_SAFE_INTEGER;

    for(p1=0; p1<arr.length; p1++){ 
        sum+=arr[p1];               //for문 돌면서 더해나가기
        if(p1>2)sum-=arr[p2++]      //p1 index번호가 2보다 커질 때 p2값을 빼면서 3개만 더한다.
        if(sum>max){                //sum과 max를 비교하면서 answer을 정한다.
            max=sum;
            answer=max;
        }
    }
    return answer;
}

let a = [12,15,11,20,25,10,20,19,13,15];
console.log(maximumsales(3,a));

