function add(a,b){
    let sum = a+b;
    return sum;
}
function subtract(a,b){
    let sum = a-b;
    return sum;
}
function multiply(a,b){
    let sum = a * b;
    return sum;
}
function divide(a,b){
    let sum = a/b;
    return sum;
}

function operate(o,a,b){
    if(o === "+"){
        let operation = add(a,b);
        return operation;
    }
    else if(o === "-"){
        let operation = add(a,b);
        return operation;
    }
    else if(o === "*"){
        let operation = multiply(a,b);
        return operation;
    }
    else{
        let operation = divide(a,b);
        return operation;
    }
}
