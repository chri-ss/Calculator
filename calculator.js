let display = document.querySelector('p');

let buttons = document.querySelectorAll('.display');
buttons = Array.from(buttons);

let input = [];

buttons.forEach(button => button.addEventListener('click', () => {
    if(input.length > 10)
    {
        return 0;
    }
    input.push(button.textContent);
    display.textContent += button.textContent;
}))

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