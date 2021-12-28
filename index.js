class Calculator {
    constructor(previousOperationNumber, currentOperationNumber){
        this.previousOperationNumber = previousOperationNumber
        this.currentOperationNumber = currentOperationNumber
    }
clear(){

}

delete(){

}

appendNumber(number){

}

chooseOperations(operation){

}

compute(){

}
updateDisplay(){
    
}

}


const numberButtons = document.getElementById('[data-number]')
const operationButtons = document.getElementById('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton= document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperationNumber = document.querySelector('[data-previous-operand]')
const currentOperationNumber = document.querySelector('[data-current-operand]')
