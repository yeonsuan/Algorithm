//멘토링 + 부가 설명 (4중 for문)

function solution(test){
    let answer=0;
    m=test.length //숫자 3 배열3개
    n=test[0].length //학생수 4개 ex 3,4,1,2
    
    for(let i=1; i<=n; i++){ //멘토 학생 번호
        for(let j=1; j<=n; j++){ //멘티 학생 번호
            let cnt = 0; //매 테스트 들어가기전 초기화
            for(let k=0; k<m; k++){ //수학 테스트 번호
                let pi=pj=0; 
                for(let s=0; s<n; s++){ //s가 학생수만큼 돈다
                    if(test[k][s]===i) pi=s;
                    //k번째 테스트에 s등을 하는 i번학생이 있냐 없냐? "s는 i번 학생의 등수" 
                    //pi:멘토가 되는 i번 학생의 등수
                    if(test[k][s]===j) pj=s; //pj : 멘티가 되는 j번 학생의 등수
                    }
                    if(pi<pj) cnt++;
                }
                if(cnt===m) answer++; //cnt값은 테스트횟수가 되어야함.
            }
        }
        return answer;
    }
    

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));