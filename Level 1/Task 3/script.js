let currentInput = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendDigit(digit) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function setOperator(newOperator) {
    operator = newOperator;
    firstOperand = currentInput;
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    const secondOperand = currentInput;
    switch (operator) {
        case '+':
            currentInput = String(parseFloat(firstOperand) + parseFloat(secondOperand));
            break;
        case '-':
            currentInput = String(parseFloat(firstOperand) - parseFloat(secondOperand));
            break;
        case '*':
            currentInput = String(parseFloat(firstOperand) * parseFloat(secondOperand));
            break;
        case '/':
            currentInput = String(parseFloat(firstOperand) / parseFloat(secondOperand));
            break;
    }
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

updateDisplay();
