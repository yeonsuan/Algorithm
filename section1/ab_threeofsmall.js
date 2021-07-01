function small(a, b, c){
    let answer;
    if (a<b){
        answer = a;
    } else answer = b;
    if (c<answer){
        answer = c;
    }
    return answer;
}

console.log(small(100,5,120));
console.log(small(2,5,120));
console.log(small(12312,5232,12220));
console.log(small(1,52,2));
console.log(small(0,3,1));
console.log(small(0.5,2,120));
console.log(small(10,590,1));
console.log(small(1039,5,12));


