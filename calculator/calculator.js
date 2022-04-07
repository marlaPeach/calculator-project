class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        switch (this.operator) {
            case "add":
                return "Add";
                break;
            case "subtract":
                return "Subtract"
                break;
            case "multiply":
                return "Multiply"
                break;
            case "divide":
                return "Divide"
                break;
        }
    }

    // performa a calculation based on the currently selected operation
    operate() {
        switch (this.operator) {
            case "add":
                this.add();
                break;
            case "subtract":
                this.subtract();
                break;
            case "multiply":
                this.multiply();
                break;
            case "divide":
                this.divide();
                break;
        }
    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        this.value = this.firstNumber + this.secondNumber;
    }

    // perform subtraction operation
    subtract() {
        this.value = this.firstNumber - this.secondNumber;
    }

    // perform multiplication operation
    multiply() {
        this.value = this.firstNumber * this.secondNumber;
    }

    // perform divide operation
    divide() {
        if(this.secondNumber === 0)
        {
            this.attemptedDivideByZero = true;
        } else {
            this.attemptedDivideByZero = false;
            this.value = this.firstNumber / this.secondNumber;
        }
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
