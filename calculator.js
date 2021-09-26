let display = document.querySelector('p');

let buttons = document.querySelectorAll('.display');
buttons = Array.from(buttons);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    input = [];
    display.textContent = '';
})

let input = [];

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