function solution(a,b,c){
    let answer;
    let max;
    let sum = a+b+c;
    if (a<b){
        max = b
    }else {max=a};
    if (c>max){
        max=c
    }
    if (sum-max>max){
        answer='Yes'
    }else {answer = 'No'};

    console.log(answer);
    return answer;
}

solution(1,4,7);
solution(5,4,7);
solution(1,40,7);
solution(1,5,5);
solution(1,10,4);