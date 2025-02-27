// setup variables and get a calculator instance
let calc;

function CreateCalculator() {
    //create new calculator ()
    //define variables
    calc = new Calculator();
    var validate = /^[0-9]/;
    if(document.getElementById("inputNumberOne").value.match(validate))
    {
        calc.firstNumber = parseInt(document.getElementById("inputNumberOne").value, 10);
    } else {
        window.alert(`${document.getElementById("inputNumberOne").value} is not a valid number.`);
    }
    if(document.getElementById("inputNumberTwo").value.match(validate))
    {
        calc.secondNumber = parseInt(document.getElementById("inputNumberTwo").value, 10);
        calc.operator = getOperator();
    } else {
        window.alert(`${document.getElementById("inputNumberTwo").value} is not a valid number.`);
    }
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    calc.operate();
    if(calc.attemptedDivideByZero === true)
    {
        window.alert('Cannot divide by zero. Please choose another value.');
    } else {
        switch (calc.operator)
        {
            case "add":
                operator = "added to"
                this.updateResultText(`The result of ${calc.firstNumber} ${operator} ${calc.secondNumber} is ${calc.value}`);
                break;
            case "subtract":
                this.updateResultText(`The result of ${calc.firstNumber} ${operator} ${calc.secondNumber} is ${calc.value}`);
                break;
            case "multiply":
                operator = "multiplied by";
                this.updateResultText(`The result of ${calc.firstNumber} ${operator} ${calc.secondNumber} is ${calc.value}`);
                break;
            case "divide":
                operator = "divided by";
                this.updateResultText(`The result of ${calc.firstNumber} ${operator} ${calc.secondNumber} is ${calc.value}`);
                break;
        }
    }
    console.log(calc.getAction());
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
    document.getElementById("inputNumberOne").value = '';
    document.getElementById("inputNumberTwo").value = '';
    this.updateResultText('');
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
        if(operators[i].checked === true)
        {
            return operators[i].value;
        }
    }
}
