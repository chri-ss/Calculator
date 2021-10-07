let display = document.querySelector('p');

let buttons = document.querySelectorAll('.display');
buttons = Array.from(buttons);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    input = '0';
    mem = [];
    op = '';
    display.textContent = 0;
})

let squareRoot = document.querySelector('.sqrrt');
squareRoot.addEventListener('click', () => {
    input = Math.sqrt(input);
    mem[0] = input;
    display.textContent = mem[0];
    if(display.textContent.length > 11 && display.textContent.includes('.'))
    {
        display.textContent = mem[0].toFixed(10 - display.textContent.indexOf('.'));
    }
})

let percent = document.querySelector('.percent');
percent.addEventListener('click', () => {
    input /= 100;
    mem[0] = input;
    display.textContent = input;
    if(display.textContent.length > 11 && display.textContent.includes('.'))
    {
        display.textContent = mem[0].toFixed(10 - display.textContent.indexOf('.'));
    }
})

let decimal = document.querySelector('.dec');
decimal.addEventListener('click', () => {
    input.includes('.') ? input += '' : input += '.';
    display.textContent = input;
})

let posneg = document.querySelector('.posneg');

posneg.addEventListener('click',() => {
    if(input != 0)
    {
        input *= -1;
        mem[0] = input;
        display.textContent = mem[0];
        console.log(input);
        console.log(mem[0]);
    }
    else
    {
        display.textContent *= -1;
        mem[0] = parseFloat(display.textContent);
    }
})

let input = '0';
let mem = [];
let op = '';
display.textContent = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    if(input.length > 10)
    {
        return 0;
    }
    input += button.textContent;    //store string of number in input while typing
    if(input[0] == '0' && input[1] != '.')
    {
        input = input.slice(1);
    }
    display.textContent = input;    //display input on screen
}))

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () =>{
   
    if(input === '0' && op == '×')
    {
        input === '1';
        op = operator.textContent;
    }
    else if(input === '0' && op == '÷')
    {
        input === '1';
        op = operator.textContent;
    }
    else if(op === '')       //first time operator
    {
        mem[0] = parseFloat(input);
        op = operator.textContent; 
        display.textContent = mem[0];           
    }
    else
    {
        mem[1] = parseFloat(input); //store second number into second index
        mem[0] = mem.reduce(function(total, nextNum) {
            return operate(total, op, nextNum);         //perform operation and store back into mem[0]
        })
        op = operator.textContent;
        display.textContent = mem[0];
        if(display.textContent.length > 11 && display.textContent.includes('.'))
        {
            display.textContent = mem[0].toFixed(10 - display.textContent.indexOf('.'));
        }
        else if(display.textContent > 99999999999)
        {
            display.textContent = mem[0].toExponential(3);
        }
        mem[1] = 1;                
    }
    input = '0';
    console.log(mem);
    console.log(op);
    console.log(input);
}))

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if(input === '0' && op == '×')
    {
        input === '1';
    }
    else if(input === '0' && op == '÷')
    {
        input === '1';
    }
    else
    {
        mem[1] = parseFloat(input); //store second number into second index
        mem[0] = mem.reduce(function(total, nextNum) {      
            return operate(total, op, nextNum);     //perform op and store in mem[0]
        })
        mem[1] = 1;                   //clear mem[1]
        display.textContent = mem[0]; //set display to the result of the calc
        if(display.textContent.length > 11 && display.textContent.includes('.'))
        {
            display.textContent = mem[0].toFixed(10 - display.textContent.indexOf('.'));
        }
        else if(display.textContent > 99999999999)
        {
            display.textContent = mem[0].toExponential(3);
        }
        input = '0';
        console.log(mem);
        console.log(op);
    }
})

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
            if(y === 0)
            {
                x = 0;
                y = 1;
            }
            return divide(x, y);
            break;

        default: 
            return 0;
            break;
    }
}