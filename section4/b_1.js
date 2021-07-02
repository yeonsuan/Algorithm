//뒤집은 소수
function solution(n,arr){
    let answer='';
    for(let x of arr){
        if(x.split('').reverse.joint('')){ //여기서 이제 바뀜
                if (x <= 1) return false;
                if (x === 2 || x === 3) answer+='x';
                if (x % 2 === 0) return false;

            let divisor = 3;
            while (x > divisor) {
            
                if (x % divisor === 0) return false;

             
                divisor += 2;
            }

          
            answer+='x'
        }

        }
    return answer;
}

let arr = [32,55,62,20,250,370,200,30,100];
console.log(solution(9,arr));
