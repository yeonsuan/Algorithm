function sum(a) {
    let number = 0;
    for(let i = 1; i <= a; i++){
        number = number + i
    }
    return number;
}

const allsum = sum(10);
console.log(allsum);