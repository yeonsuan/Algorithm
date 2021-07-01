function solution(s) {
    let answer='YES';
    s=s.toLowerCase().replace(/[^a-z]/g,'');   //여기서 replace 정규표현식 개같내
    if(s.split('').reverse().join('') !==s){answer ='NO';}
    return answer;
}

let s='found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(s));