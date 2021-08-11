const defaultResult = 0;
let currentResult = defaultResult;

const getUserInput = () => parseInt(userInput.value) ;

function add(){
    const userNumber = getUserInput() ;
    const description = `${currentResult} + ${userNumber}` ;
    currentResult = currentResult + userNumber;
    outputResult(currentResult, description);
}

function subtract(){
    const userNumber = getUserInput();
    const description = `${currentResult} - ${userNumber}`;
    currentResult = currentResult - userNumber ;
    outputResult(currentResult,description);
}

function multiply(){
    const userNumber = getUserInput();
    const description = `${currentResult} * ${userNumber}`;
    currentResult = currentResult * userNumber ;
    outputResult(currentResult,description);
}

function divide(){
    const userNumber = getUserInput();
    const description =`${currentResult} / ${userNumber}`;
    currentResult = currentResult / userNumber ;
    outputResult(currentResult,description);
}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click" , subtract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);