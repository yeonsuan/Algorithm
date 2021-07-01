//자릿수의 합
function solution(n,arr) {
    let answer;
    let max=Number.MIN_SAFE_INTEGER;
        for(let x of arr){
            let sum=0; 
            let m=x;
            while(m){
                sum=sum+(m%10);
                m=Math.floor(m/10);  //여기진심 이해 하나도안돼! 이줄 왜 들어가는거야..? 12가 왜들어가
        }
            if(sum>max){
                max=sum;
                answer=x;
            }else if(sum===max){
                if(x>answer) answer=x;
            }
        }
        return answer;
            }

    let arr=[128,460,603,40,521,137,123];
    console.log(solution(7,arr));