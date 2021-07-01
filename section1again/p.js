//중복단어제거 (개완벽 하다.......)
function solution(arr) {
    let answer=[];
    for(let i=0; i<=arr.length; i++){
        if(i===arr.indexOf(arr[i])){
            answer.push(arr[i]);
        }
    }
    return answer;
}

let n =['good','time','good','time','student'];
console.log(solution(n));