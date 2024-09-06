function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers in both fields.');
        return;
    }

    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            alert('Tidak Bisa Dibagi dengan 0');
            return;
        }
        result = num1 / num2;
    } else {
        alert('Opetator invalid');
        return;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}