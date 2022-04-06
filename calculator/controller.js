// setup variables and get a calculator instance
let calc;

function CreateCalculator() {
    //create new calculator ()
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let operator = getOperator();
    calc = new Calculator(firstNumber, secondNumber, operator);
    //define variables
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    calc.operate();
    this.updateResultText(`The result of ${calc.firstNumber} ${calc.operator} ${calc.secondNumber} is ${calc.value}`);
    calc.getAction();
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    document.getElementById("result-text").innerHTML = value;
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("firstNumber").value = '';
    document.getElementById("secondNumber").value = '';
    document.getElementById("add").checked = true;
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    var operators = document.getElementsByName("operator");
    for(let i=0; i < operators.length; i++)
    {
        console.log(operators[i].value);
        if(operators[i].checked == true)
        {
            return operators[i].value;
        }
    }
}
