function solution(s) {
    let answer = "";
    for(let x of s){
        if(x===x.toLowerCase()){
            answer+=x.toUpperCase();  //빈자리를 만들어서 그 자리에 채워야한다는 것
        } else if(x===x.toUpperCase()){
            answer+=x;
        }
    }
    return answer;
}

let str = "YeonSuAnandJunZero";
console.log(solution(str));