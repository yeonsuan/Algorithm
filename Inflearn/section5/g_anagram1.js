//아나그램(해시) 좋지 않은 코드같당..^^ 아니 이게 왜 도대체 NO냐고~~~!!!!!

anagram = ( a, b ) => {
    let answer;
    let array1 = a.split("");
    let array2 = b.split("");
    console.log(array1,array2)
    let up01 = array1.sort();
    let up02 = array2.sort(); //여기서 왜 솔트 안먹냐?
    console.log(up01,up02)
    if( up01 === up02 ){
        answer = "YES";
    }else{
        answer = "NO";
    }

    return answer;
}

let str01 = "AbaAeCe";
let str02 = "baeeACA";
console.log( anagram(str01,str02) );