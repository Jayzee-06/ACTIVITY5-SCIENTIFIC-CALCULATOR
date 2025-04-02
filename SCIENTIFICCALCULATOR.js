let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    display.value += func + '(';
}

function calculate() {
    try {
        // Handle mathematical functions properly using Math methods
        display.value = eval(display.value.replace(/Math\./g, 'Math.'));
    } catch (e) {
        alert('Invalid Expression');
        display.value = '';
    }
}
