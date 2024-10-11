function appendToDisplay(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    // Solo se permite agregar operadores si el último carácter no es un operador
    if (isOperator(value) && isOperator(currentValue[currentValue.length - 1])) {
        return; // No se permite añadir el operador
    }

    display.value += value;

    // Realizar el cálculo automáticamente si ya hay un número, operador, y otro número
    if (isCompleteExpression(display.value)) {
        calculate(); // Realiza el cálculo si la expresión está completa
    }
}

// Función para limpiar el display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Función para realizar el cálculo
function calculate() {
    try {
        let display = document.getElementById("display").value;
        let result = eval(display); // eval evalúa la expresión matemática en el string
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Función para verificar si la expresión está completa (número operador número)
function isCompleteExpression(expression) {
    // Regex para verificar si la expresión sigue el patrón número-operador-número
    return /\d+[\+\-\*\/]\d+/.test(expression);
}

// Función para verificar si un carácter es un operador
function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}