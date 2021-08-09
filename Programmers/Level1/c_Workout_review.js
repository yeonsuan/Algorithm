//체육복

function solution(n, lost, reserve) {
    var answer = 0;
    let setArr =[]
    for(let i = 1 ; i <= n ; i++){
        setArr.push(1) 
        if(reserve.includes(i)){ 
             setArr[i-1]++   
        } 
        if(lost.includes(i)){ 
            setArr[i-1]-- 
        }       
    }
    for(let i = 0 ; i < n ; i++){
       if(!setArr[i]){  
           if(setArr[i-1]===2){
                setArr[i]++
               setArr[i-1]-- 
           }else if(setArr[i+1]===2){ 
               setArr[i]++ 
               setArr[i+1]-- 
           }
       }
    }
    for(let i = 0 ; i< n ; i ++){ 
        if(setArr[i] >= 1){
            answer++
        }
    }
    console.log(setArr)
    return answer;
}