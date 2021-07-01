//홀수
여기 다시 한번 더 보기!!!!!!!!!!!!!!!!
function solution(s) {
    let answer=[];
    let sum=0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let x of s){
        if(x%2===1){
            sum=sum+x;
                if(x<min){
                    min=x;
                }
        }
    }
    answer.push(sum);
    answer.push(min);       //두개를 답으로 빼는 방법...
    return answer;
}

let arr=[12,77,38,41,53,92,85];
console.log(solution(arr));