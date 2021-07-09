function solution(woman,man) {
    let answer="";
    for (let i=0; i<woman.length; i++){
        if(woman[i]===man[i]){
            answer+='D';
        }else if(woman[i]===1 && man[i]===3){
            answer+='A';
        }else if(woman[i]===2 && man[i]===1){
            answer+='A';
        }else if(woman[i]===3 && man[i]===2){
            answer+='A';
        }else { answer += 'B';}
    }
    return answer;
}
woman = [2,3,3,1,3];
man = [1,1,2,2,3];
console.log(solution(woman,man));