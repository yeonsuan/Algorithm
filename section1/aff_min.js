function solution(a) {
    let min = Number.MAX_SAFE_INTEGER
    for(let x of a){
        if(x<min){
            min = x;
        }
    }
    return min;
}


const b = solution([5,3,7,11,2,15,17]);
console.log(b);