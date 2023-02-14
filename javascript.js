let displaynumber = [];

let defaultOp = 0;

const page = document.querySelector('#page');
page.style.display = "flex";
page.style.flexDirection = "column";
page.style.justifyContent = "center";
page.style.flex = 1;
page.style.height = '1200px';


const container = document.querySelector('#container');
container.style.border = '10px solid green';
container.style.width = '500px';
container.style.height = '620px';
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignSelf= "center";
container.style.alignItems = "center";

const calc = document.createElement('div');
calc.setAttribute("id", "calc");
calc.style.border = '10px solid black';
calc.style.backgroundColor = "gray";
calc.style.width = '480px';
calc.style.height = '100px';
calc.style.display = "flex";
calc.style.justifyContent = "flex-end";


container.appendChild(calc);

const num = document.createElement('div');
num.setAttribute("id", "num");
num.textContent = "0";
num.style.fontSize = "64px";
num.style.alignSelf = "flex-end";

calc.appendChild(num);

const innerCalc = document.createElement('div');
innerCalc.classList.add("innerCalc");
innerCalc.style.backgroundColor = "gray";
innerCalc.style.width = '500px';
innerCalc.style.height = '100px';
innerCalc.style.flex = 1;
innerCalc.style.flexWrap= "wrap";

container.appendChild(innerCalc);

const buttonC = document.createElement('button');
buttonC.classList.add("buttonC");
buttonC.style.width = '125px';
buttonC.style.height = '100px';
buttonC.textContent = "AC";

innerCalc.appendChild(buttonC);

const buttonP = document.createElement('button');
buttonP.classList.add("buttonP");
buttonP.style.width = '125px';
buttonP.style.height = '100px';
buttonP.textContent = "%";

innerCalc.appendChild(buttonP);

const buttonN = document.createElement('button');
buttonN.classList.add("buttonN");
buttonN.style.width = '125px';
buttonN.style.height = '100px';
buttonN.textContent = "+/-";

innerCalc.appendChild(buttonN);

const buttonD = document.createElement('button');
buttonD.classList.add("buttonD");
buttonD.style.width = '125px';
buttonD.style.height = '100px';
buttonD.textContent = "/";

innerCalc.appendChild(buttonD);

const button7 = document.createElement('button');
button7.classList.add("button7");
button7.style.width = '125px';
button7.style.height = '100px';
button7.textContent = "7";

innerCalc.appendChild(button7);


const button8 = document.createElement('button');
button8.classList.add("button8");
button8.style.width = '125px';
button8.style.height = '100px';
button8.textContent = "8";

innerCalc.appendChild(button8);

const button9 = document.createElement('button');
button9.classList.add("button9");
button9.style.width = '125px';
button9.style.height = '100px';
button9.textContent = "9";

innerCalc.appendChild(button9);

const buttonM = document.createElement('button');
buttonM.classList.add("buttonM");
buttonM.style.width = '125px';
buttonM.style.height = '100px';
buttonM.textContent = "*";

innerCalc.appendChild(buttonM);

const button4 = document.createElement('button');
button4.classList.add("button4");
button4.style.width = '125px';
button4.style.height = '100px';
button4.textContent = "4";

innerCalc.appendChild(button4);

const button5 = document.createElement('button');
button5.classList.add("button5");
button5.style.width = '125px';
button5.style.height = '100px';
button5.textContent = "5";

innerCalc.appendChild(button5);

const button6 = document.createElement('button');
button6.classList.add("button6");
button6.style.width = '125px';
button6.style.height = '100px';
button6.textContent = "6";

innerCalc.appendChild(button6);

const buttonS = document.createElement('button');
buttonS.classList.add("buttonS");
buttonS.style.width = '125px';
buttonS.style.height = '100px';
buttonS.textContent = "-";

innerCalc.appendChild(buttonS);

const button1 = document.createElement('button');
button1.classList.add("button1");
button1.style.width = '125px';
button1.style.height = '100px';
button1.textContent = "1";

innerCalc.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add("button2");
button2.style.width = '125px';
button2.style.height = '100px';
button2.textContent = "2";

innerCalc.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add("button3");
button3.style.width = '125px';
button3.style.height = '100px';
button3.textContent = "3";

innerCalc.appendChild(button3);

const buttonPP = document.createElement('button');
buttonPP.classList.add("buttonPP");
buttonPP.style.width = '125px';
buttonPP.style.height = '100px';
buttonPP.textContent = "+";

innerCalc.appendChild(buttonPP);

const button0 = document.createElement('button');
button0.classList.add("button0");
button0.style.width = '250px';
button0.style.height = '100px';
button0.textContent = "0";

innerCalc.appendChild(button0);

const buttonPPP = document.createElement('button');
buttonPPP.classList.add("buttonPPP");
buttonPPP.style.width = '125px';
buttonPPP.style.height = '100px';
buttonPPP.textContent = ".";

innerCalc.appendChild(buttonPPP);

const buttonE = document.createElement('button');
buttonE.classList.add("buttonE");
buttonE.style.width = '125px';
buttonE.style.height = '100px';
buttonE.textContent = "=";

innerCalc.appendChild(buttonE);

button1.addEventListener('click', addNumber1);

let numcounter = 0;

function addNumber1(){
    const element1 = document.getElementById("numbs");
    if(element1 !== null){
        element1.remove();
    }
    ++numcounter;
    const element = document.getElementById("num");
    if(element === null){
    displaynumber.push(1);
    const num = document.createElement('div');
    num.setAttribute("id", "numb");
    num.textContent = 1;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    console.log(displaynumber);
    }
    else{
        element.remove();
        displaynumber.push(1);
        const num = document.createElement('div');
        num.setAttribute("id", "numb");
        num.textContent = 1;
        num.style.fontSize = "64px";
        num.style.alignSelf = "flex-end";
    
        calc.appendChild(num);
        console.log(displaynumber);
    }
}

button2.addEventListener('click', addNumber2);

function addNumber2(){
    const element1 = document.getElementById("numbs");
    if(element1 !== null){
        element1.remove();
    }
    ++numcounter;
    const element = document.getElementById("num");
    if(element === null){
    displaynumber.push(2);
    const num = document.createElement('div');
    num.setAttribute("id", "numb");
    num.textContent = 2;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    console.log(displaynumber);
    }
    else{
        element.remove();
        displaynumber.push(2);
        const num = document.createElement('div');
        num.setAttribute("id", "numb");
        num.textContent = 2;
        num.style.fontSize = "64px";
        num.style.alignSelf = "flex-end";
    
        calc.appendChild(num);
        console.log(displaynumber);
    }
}
button3.addEventListener('click', addNumber3);

function addNumber3(){
    const element1 = document.getElementById("numbs");
    if(element1 !== null){
        element1.remove();
    }
    ++numcounter;
    const element = document.getElementById("num");
    if(element === null){
    displaynumber.push(3);
    const num = document.createElement('div');
    num.setAttribute("id", "numb");
    num.textContent = 3;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    console.log(displaynumber);
    }
    else{
        element.remove();
        displaynumber.push(3);
        const num = document.createElement('div');
        num.setAttribute("id", "numb");
        num.textContent = 3;
        num.style.fontSize = "64px";
        num.style.alignSelf = "flex-end";
    
        calc.appendChild(num);
        console.log(displaynumber);
    }
}


buttonPP.addEventListener('click', plus);
let lastOp = 0;
function plus(){
    if(displaynumber.length === 0){

        for(let i = 0; i < numcounter; i++){
            const element = document.getElementById("numb");
            element.remove();

        let sum = defaultOp + defaultOp;
        defaultOp = sum;
        const num = document.createElement('div');
    num.setAttribute("id", "numbs");
    num.textContent = defaultOp;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    
    console.log(displaynumber);


    numcounter = 0;
    lastOp = "+";
    }
}
    else{
    let numbers = displaynumber.join("");
    let number = parseInt(numbers);
    console.log(number);
    for(let i = 0; i < numcounter; i++){
    const element = document.getElementById("numb");
    element.remove();
    }
    let operation = "+";
    
    let sum = operate(operation,number,defaultOp);
    console.log(sum);

    for(let i = 0; i <= displaynumber.length; i++){
        displaynumber.pop();
        }

    defaultOp = sum;
    const num = document.createElement('div');
    num.setAttribute("id", "numbs");
    num.textContent = defaultOp;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    
    console.log(displaynumber);


    numcounter = 0;
    lastOp = "+";
    }
}

buttonC.addEventListener('click', c);

function c(){
    if(defaultOp===0){
        return;
    }
    if(displaynumber.length === 0){
        const element1 = document.getElementById("numbs");
        if(element1 !== null){
            element1.remove();
        }
        for(let i = 0; i < numcounter; i++){
            const element = document.getElementById("numb");
            element.remove();
            }
        for(let i = 0; i <= displaynumber.length; i++){
            displaynumber.pop();
            }
        const num = document.createElement('div');
        num.setAttribute("id", "num");
        num.textContent = "0";
        num.style.fontSize = "64px";
        num.style.alignSelf = "flex-end";
        calc.appendChild(num);
    
        defaultOp = 0;
    
        numcounter = 0;
        lastOp = 0;
    }
    else{
    const element1 = document.getElementById("numbs");
    if(element1 !== null){
        element1.remove();
    }
    for(let i = 0; i < numcounter; i++){
        const element = document.getElementById("numb");
        element.remove();
        }
    for(let i = 0; i <= displaynumber.length; i++){
        displaynumber.pop();
        }
    const num = document.createElement('div');
    num.setAttribute("id", "num");
    num.textContent = "0";
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";
    calc.appendChild(num);

    defaultOp = 0;

    numcounter = 0;
    lastOp = 0;
    }
}

buttonE.addEventListener('click', E);

function E(){
    if(displaynumber.length === 0){

        for(let i = 0; i < numcounter; i++){
            const element = document.getElementById("numb");
            element.remove();

        let sum = defaultOp + defaultOp;
        defaultOp = sum;
        const num = document.createElement('div');
    num.setAttribute("id", "numbs");
    num.textContent = defaultOp;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    
    console.log(displaynumber);


    numcounter = 0;
    }
}
    else{
    let numbers = displaynumber.join("");
    let number = parseInt(numbers);
    console.log(number);
    for(let i = 0; i < numcounter; i++){
    const element = document.getElementById("numb");
    element.remove();
    }
    let operation = "+";
    
    let sum = operate(operation,number,defaultOp);
    console.log(sum);

    for(let i = 0; i <= displaynumber.length; i++){
        displaynumber.pop();
        }

    defaultOp = sum;
    const num = document.createElement('div');
    num.setAttribute("id", "numbs");
    num.textContent = defaultOp;
    num.style.fontSize = "64px";
    num.style.alignSelf = "flex-end";

    calc.appendChild(num);
    
    console.log(displaynumber);


    numcounter = 0;
    }
}




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