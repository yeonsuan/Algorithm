function solution(str,t) {
    let anwer='';
    for(let i =0; i<str.length; i++){
        if(str[i]==='e'){answer+=0;}
        else{answer++;}
    }
    if(str.split('').reverse.joint('')){
        for(let j=0; j<str.length; j++){
            if(str[i]==='e'){answer+=0;}
            else{answer++;}
        }
    }

    return Math.min(answer);
}

let str="teachermode";
console.log(solution(str, 'e'));