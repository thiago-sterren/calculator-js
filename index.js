// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1 = null;
let num2 = null;
const inputEl = document.getElementById("input-id");
const errorInputParagraph = document.getElementById("error-input");
let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");

const submitNumber = () => {
    const inputValue = +inputEl.value.trim();
    if (!inputValue) {
        console.log("Please, enter a number");
    }
    
    if (num1 === null) {
        num1 = inputValue;
        num1El.textContent = num1;
        inputEl.value = "";
    } else if (num2 === null) {
        num2 = inputValue;
        num2El.textContent = num2;
        inputEl.value = "";
    } else {
        errorInputParagraph.textContent = "You already entered 2 numbers!";   
    }
}

const submitNumberButton = document.getElementById("submit-num-btn");
submitNumberButton.addEventListener("click", submitNumber);

const clearNumbers = () => {
    num1 = null;
    num2 = null;
    num1El.textContent = num1;
    num2El.textContent = num2;
    errorInputParagraph.textContent = "";
    inputEl.value = "";
}

const clearNumbersButton = document.getElementById("clear-nums-btn");
clearNumbersButton.addEventListener("click", clearNumbers);

const resultParagraph = document.getElementById("sum-el");

const addFunction = () => {
    const sum = num1 + num2;
    resultParagraph.textContent = `Result: ${sum}`;
}

const subtractFunction = () => {
    const sum = num1 - num2;
    resultParagraph.textContent = `Result: ${sum}`;
}

const multiplyFunction = () => {
    const sum = num1 * num2;
    resultParagraph.textContent = `Result: ${sum}`;
}

const divideFunction = () => {
    if (num2 === 0) {
        alert("You can't put 0 on the divisor");
        //resultParagraph.textContent = "You can't put 0 on the divisor";
    } else {
        const sum = num1 / num2;
        resultParagraph.textContent = `Result: ${sum}`;   
    }
}

const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addFunction);
const subtractButton = document.getElementById("sub-btn");
subtractButton.addEventListener("click", subtractFunction);
const multiplyButton = document.getElementById("mul-btn");
multiplyButton.addEventListener("click", multiplyFunction);
const divideButton = document.getElementById("div-btn");
divideButton.addEventListener("click", divideFunction);