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

const page = document.querySelector('#page');
page.style.display = "flex";
page.style.flexDirection = "column";
page.style.justifyContent = "center";
page.style.flex = 1;
page.style.height = '1200px';


const container = document.querySelector('#container');
container.style.border = '10px solid green';
container.style.width = '500px';
container.style.height = '600px';
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignSelf= "center";
container.style.alignItems = "center";

const calc = document.createElement('div');
calc.style.border = '10px solid black';
calc.style.backgroundColor = "gray";
calc.textContent = "0";
calc.style.width = '480px';
calc.style.height = '100px';
calc.style.display = "flex";
calc.style.justifySelf = "flex-end";


container.appendChild(calc);


