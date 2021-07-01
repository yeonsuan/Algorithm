function solution(s) {
    let answer;
    let temp = '';

    if(s.length%2===1){
        temp += s[parseInt(s.length/2)];
    }else if(s.length%2===0){
        temp += s[s.length/2];
        temp += s[(s.length/2-1)];
    }
    console.log(temp);
    return temp;
}

let str = 'good';
solution(str);



