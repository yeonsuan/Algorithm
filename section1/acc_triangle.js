function solution(a,b,c) {
    let answer;
    let max;
    let sum = a+b+c; //여기서 내가 알아야할건 sum-max같은 연산을 만들어내는것
    if (a<b){
        max=b;
    }else max=a;
    if (c>max){
        max=c;
    }
        if(sum-max>max){answer='Yes';}
        else answer='No';
    console.log(answer);
    return answer;
}

solution(3,5,7);