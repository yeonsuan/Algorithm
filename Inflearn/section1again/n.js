//가운데문자 출력
function solution(n) {
    let answer='';
    let mid=parseInt(n.length/2) //이거 index 번호임!!!!!! 그니까 study 01234의 2!!
        if(n.length%2===1){
            answer=n.substring(mid,mid+1); //이것도 다 index번호!!!!
        }else{answer=n.substring(mid-1,mid+1)};
    return answer;
        }

let str = 'study';
console.log(solution(str)); //여기도 다시보기, substring과 substr의 개념 다시보기