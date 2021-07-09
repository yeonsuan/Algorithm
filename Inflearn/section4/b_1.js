//뒤집은 소수
function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));





// function solution(n,arr){
//     let answer='';
//     for(let x of arr){
//         x.split('').reverse.joint('')//여기서 이제 바뀜
//         console.log(x)
//         if(x<=1)return false;
//         if (x===2 || x===3) answer+=x;
//         if(n%2)return false;
//         let divisor=3;
//         while(x>divisor){
//             if(n%divisor===0)return false;

//             divisor+=2;
        

//         }

//     return answer;
// }

// let arr = [32,55,62,20,250,370,200,30,100];
// console.log(solution(9,arr));
