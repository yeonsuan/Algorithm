//아나그램 수업 코드 내가 이걸 왜하고 있는거지.. 
//chairman다시 공부하고 풀기.. 열쩡~~~!!!! 

solution = (str1, str2) => {
    let answer="YES";
    let sH = new Map(); //객체 생기고~
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x)===0) return "NO";
        sH.set(x, sH.get(x)-1);
    }

    return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a,b))