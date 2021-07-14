//최대 매출 (강의 코드)
const solution = (n, arr) => {
    let answer,sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i];                    //초기 기본 3개 합 sum 값!
    }for(let i=n; i<arr.length; i++){   //n부터는 arr[i]-arr[i-n]만 더하면되니까!
        sum+=(arr[i]-arr[i-n]);         //이부분 사고방식이 중요..
        answer=Math.max(answer,sum);    //기존 answer과 sum중 큰 값을 골라라! math.max사용하기
    }
    return answer;
}

let a = [12,15,11,20,25,10,20,19,13,15];
console.log(solution(3,a));