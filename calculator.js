let display = document.querySelector('p');

let buttons = document.querySelectorAll('.display');
buttons = Array.from(buttons);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    input = '0';
    display.textContent = '0';
    mem = [];
    op = '';
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
    if(input[0] == '0')
    {
        input = input.slice(1);
    }
    display.textContent = input;    //display input on screen
}))

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () =>{
    if(op === '0')
    {
        mem[0] = parseInt(input); //put first number into first index of memory
        op = operator.textContent; //store operator in variable
        display.textContent = mem[0];           
    }
    else
    {
        if(op === '÷' && input === '0')
        {
            input = '1';
        }
        mem[1] = parseInt(input); //store second number into second index
        mem[0] = mem.reduce(function(total, nextNum) {
            return operate(total, op, nextNum);         //perform operation and store back into mem[0]
        })
        op = operator.textContent;      //update operator
        display.textContent = mem[0];   //update display
        mem[1] = 0;                     //clear mem[1]
    }
    input = '0';
    console.log(mem);
}))

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
        mem[1] = parseInt(input); //store second number into second index
        mem[0] = mem.reduce(function(total, nextNum) {      
            return operate(total, op, nextNum);     //perform op and store in mem[0]
        })
        //mem[1] = 0;                   //clear mem[1]
        display.textContent = mem[0]; //set display to the result of the calc
        //input = '0';
        if(op === '÷' && input === '0')
        {
            input = '1';
        }
})

let posneg = document.querySelector('.posneg');

posneg.addEventListener('click',() => {
    input = -parseInt(input);
    mem[0] = input;
    display.textContent = input;
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
                y = 1;
            }
            return divide(x, y);
            break;

        default: 
            return `${x} ${y}`;
            break;
    }
}