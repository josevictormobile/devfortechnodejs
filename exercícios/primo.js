function sePrimo(num) {
    for (let i = num-1; i > 1; i--) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function criaPi(num){
    debugger
    if(num!=3.14159265359){
        let seno = Math.sin(num);
        return num+seno+criaPi();
    }
    return num;
}

function sin(num){
    return Math.sin(num);
}
console.log(criaPi(3));