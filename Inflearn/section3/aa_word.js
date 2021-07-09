function solution(s) {
    let answer='YES';
    s=s.toLowerCase();
    if(s.split('').reverse().join('') !==s){answer ='NO';}
    return answer;
}

let string = 'gooG';
console.log(solution(string));