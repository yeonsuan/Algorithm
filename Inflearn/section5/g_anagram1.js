//아나그램(해시) 수안이 짠 좋지 않은 코드..^^ trash

//수안아 배열 비교에 집착하지말자.. 배열은 ===로 비교못하는 것을 알았다!

anagram = ( a, b ) => {
    let answer;
    let array1 = a.split("");
    let array2 = b.split("");

    let up01 = array1.sort();
    let up02 = array2.sort();
    console.log(up01,up02)
    if( up01 === up02 ){ //배열은 비교가 안되는 것 같다.
        //두 배열을 비교할 땐 ===가 안되고, JSOn.stringify()를 사용해서
        //모두 문자열..?로 변경해서 동일 한지 확인해야 한다.
        answer = "YES";
    }else{
        answer = "NO";
    }

    return answer;
}

let str01 = "AbaAeCe";
let str02 = "baeeACA";
console.log( anagram(str01,str02) );