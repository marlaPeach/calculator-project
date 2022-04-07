// setup variables and get a calculator instance
let calc;

function CreateCalculator() {
    //create new calculator ()
    //define variables
    calc = new Calculator();
    var validate = /^[0-9]/;
    if(document.getElementById("firstNumber").value.match(validate))
    {
        calc.firstNumber = parseInt(document.getElementById("firstNumber").value);
    } else {
        window.alert(`${document.getElementById("firstNumber").value} is not a valid number.`);
    }
    if(document.getElementById("secondNumber").value.match(validate))
    {
        calc.secondNumber = parseInt(document.getElementById("secondNumber").value);
    } else {
        window.alert(`${document.getElementById("secondNumber").value} is not a valid number.`);
    }
    calc.operator = getOperator();
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    if(calc.firstNumber && calc.secondNumber)
    {
        calc.operate();
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
