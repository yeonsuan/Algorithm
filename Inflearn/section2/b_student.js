function solution(n,arr) {
    let answer=0;
    let a = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(a<x){
            a=x, answer++;
        }
    }
    return answer;
}
arr = ['130','135','148','140','145','150','150','153'];
console.log(solution(8,arr));