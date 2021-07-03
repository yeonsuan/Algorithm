//자릿수의 합
function solution(n,arr) {
    let answer;
    let max=Number.MIN_SAFE_INTEGER;
        for(let x of arr){
            let sum=0; 
            let m=x;
            while(m){
                sum=sum+(m%10);
                m=Math.floor(m/10);  //tmp=128, tmp%10=8, 그 다음 tmp가 128인 것을 12로 바꾸기위해*
                // 그래서 128을 10으로  나눈 몫을 구하는 것, 128/10나눈 몫은 12. 몫이 나오게 하기 위해 Math.floor 함수를 쓴 것! 안쓰면 128/10=12.8
                // 이제 tmp=12이니까 다시 tmp%10을 하면 2가 구해지는 것.
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