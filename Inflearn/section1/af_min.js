function solution(a) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let x of a) {
        if(x < min) {
            min = x;
        }
    }
  return min;
}

let a = solution ([1111,15,19,200,33,55,311]);
console.log(a);

// //이렇게 풀어도되는거야..??????

// function solution(a) {
//     const a = [b,c,d,f,e,f];
//     let answer
    
// }

// solution([1111,2,4,7])