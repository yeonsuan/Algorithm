//K번째 큰 수
function solution(n,k,card){ //n=카드장 , k=번째 큰수
    let answer; 
    let set = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let m=j+1; m<n; m++){
                set.add(card[i]+card[j]+card[m]);
            }
        }
    }
    let a= Array.from(set).sort((a,b)=>(b-a));
    answer=a[k-1]; //a 배열에서 k-1번째 수
    return answer;
}

let arr = [13,15,34,23,45,65,33,11,26,42];
console.log(solution(10,3,arr));