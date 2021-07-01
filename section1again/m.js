//가장 긴 문자열
function solution(arr) {
    let answer='';
    let max=Number.MIN_SAFE_INTEGER
    for(let x of arr){
        if(x.length>max){
            max=x.length;  //이부분도 잘 확인. max는 x.length지만 밑줄answer은 x라는거
            answer=x;
        }
    }
    return answer;
}

let arr=['teacher','time','student','beautiful','good']; 여기 이거 적는 방법 잘 알아두기
//나는 처음에 let arr = [teacher, time, student, beautiful, good]으로 적음 ㅠ
console.log(solution(arr));