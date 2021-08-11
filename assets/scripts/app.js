const defaultResult = 0;
let currentResult = defaultResult;

//Get input from input field
const getUserInput = () => parseInt(userInput.value) ;

//Generate output String
const outputString = (operator , valueBeforeCal , inputValue)=>{
    const description = `${valueBeforeCal} ${operator} ${inputValue}`;
    outputResult(currentResult,description); //from vendor.js
}

//adding UserInput
function add(){
    const userNumber = getUserInput() ;
    const initialVal = currentResult ;
    currentResult = currentResult + userNumber;
    outputString("+" , initialVal , userNumber);
}

//Subtracting UserInput
function subtract(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult - userNumber;
    outputString("-" , initialVal , userNumber);
}

//multiply userInput
function multiply(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult * userNumber;
    outputString("*" , initialVal , userNumber);
}

//Divide UserInput
function divide(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult / userNumber;
    outputString("/" , initialVal , userNumber);
}

// "+" btn listener
addBtn.addEventListener("click",add);

// "-" btn listener
subtractBtn.addEventListener("click" , subtract);

// "*" btn listener
multiplyBtn.addEventListener("click",multiply);

// "/" btn listener
divideBtn.addEventListener("click",divide);