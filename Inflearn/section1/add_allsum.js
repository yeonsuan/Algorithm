function solution(n) {
    let number=0;
    for (let i=0; i<=n; i++){
        number = number + i;
    }
    return number;
}

const a = solution(6);
console.log(a);