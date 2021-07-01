function solution(s) {
    let answer="";
    for (let x of s){
        if (x===x.toLowerCase()){
            answer+=x.toUpperCase();
        }else{answer+=x.toUpperCase()};
    }

    return answer;
}

let str = 'yeonsuanandJunzerO';
console.log(solution(str));
//내가 궁금한건 왜 answer을 공백으로 두고 채워야하는건지
//소문자인 x를 x=대문자로 하면안되는걸까??? x=x.toUppercase
//5번 줄에 x=x.toUpperCase()라고 하면 왜 문제가 생기는걸까?