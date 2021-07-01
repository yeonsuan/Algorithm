function small(a,b,c) {
    let answer;
    if (a<b){
        answer = a;
    }else if (b<c){
        answer = b;
    }
    if (c<answer){
        answer = c;
    }
    return answer;
}

console.log(small(1,2,3));