//학급 회장/ 해시란? 임의의 크기를 가진 데이터를 고정된 데이터의 크기로 변환시키는 것
//망한 코드

const solution = (arr) => {
    let answer;
    arr.split(""); //배열로 만든 후 거기서 제일 많은 문자를 구하기!!!(이건 해시아님)
    for(let x of arr){
        if(arr[x]){
            arr[x]++;
        }else {
            arr[x] = 1;
        }
    }
    answer=arr[x];
    return answer;
}

let a = "BACBACCACCBDEDE";
console.log(solution(a));