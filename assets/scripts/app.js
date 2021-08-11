const defaultResult = 0;
let currentResult = defaultResult;

const getUserInput = () => parseInt(userInput.value) ;

const outputString = (operator , valueBeforeCal , inputValue)=>{
    const description = `${valueBeforeCal} ${operator} ${inputValue}`;
    outputResult(currentResult,description);
}

function add(){
    const userNumber = getUserInput() ;
    const initialVal = currentResult ;
    currentResult = currentResult + userNumber;
    outputString("+" , initialVal , userNumber);
}

function subtract(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult - userNumber;
    outputString("-" , initialVal , userNumber);
}

function multiply(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult * userNumber;
    outputString("*" , initialVal , userNumber);
}

function divide(){
    const userNumber = getUserInput();
    const initialVal = currentResult ;
    currentResult = currentResult / userNumber;
    outputString("/" , initialVal , userNumber);
}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click" , subtract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);