function solution(s) {
    let answer='';                              //answer에 채워넣어야하니까
    let cnt = 1;                                //H나 E는 1개씩 있으니까, 0으로하면안됨!
    s=s+' ';                                    //마지막 E도 처리해야하니까 빈칸하나 더 만들어놔야해.
    for(let i =0; i<s.length-1; i++){
        if(s[i]===s[i+1]){
            cnt++;
        }else{  //만약 앞 뒤가 다르다면? K쓰고, 2써야하니까, 그리고 다시 초기화.
            answer+=s[i];
            if(cnt>1){answer+=String(cnt);}
            cnt =1;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSSSSEEE";
console.log(solution(str));