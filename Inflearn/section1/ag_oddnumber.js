function solution(a) {
    let sum = 0; 
    let min = Number.MAX_SAFE_INTEGER
    for(let x of a){
        if (x%2===1){
            sum = sum + x;
            if (x<min){
                min = x;
            }
        }
    }
    return ([sum, min]);
}

const answer = solution([12,77,38,41,53,92,85]);
console.log(answer);
