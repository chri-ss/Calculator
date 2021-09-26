let display = document.querySelector('p');

let buttons = document.querySelectorAll('.display');
buttons = Array.from(buttons);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    input = [];
    display.textContent = '';
    mem = [];
})

let input = [];
let mem = [];

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () =>{
        if(!mem[0])
        {
            mem[0] = parseInt(storeNum(input));    
            mem[1] = operator.textContent;
        }
        else if(mem[0])
        {
            mem[2] = parseInt(storeNum(input));
            mem[0] = operate(mem[0], mem[1], mem[2]);
            mem[1] = operator.textContent;
        }
        input = [];
        display.textContent = '';
        console.log(mem);
}))

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    mem[2] = parseInt(storeNum(input));
    input = [];
    input.push(operate(mem[0], mem[1], mem[2]))
    display.textContent = operate(mem[0], mem[1], mem[2]); 
})

buttons.forEach(button => button.addEventListener('click', () => {
    if(input.length > 10)
    {
        return 0;
    }
    input.push(button.textContent);
    display.textContent += button.textContent;
}))

function storeNum(Arr) {
    let num = Arr[0];
    for(i = 1; i < Arr.length; ++i)
    {
        num += Arr[i];
    }
    return num;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate (x, operator, y) {
    switch(operator) {

        case '+':
            return add(x, y);
            break;

        case '-':
            return subtract(x, y);
            break;

        case '×':
            return multiply(x, y);
            break;

        case '÷':
            return divide(x, y);
            break;

        default: 
            return `${x} ${y}`;
            break;
    }
}