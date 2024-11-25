let currentInput = '';
let previousInput = '';
let operation = '';

// Atualiza o display da calculadora
function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

// Adiciona um número ou ponto no display
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; 
    currentInput += number.toString();
    updateDisplay();
}

// Define a operação matemática
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); 
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Calcula o resultado
function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Erro: Divisão por zero!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}

// Limpa o display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}
