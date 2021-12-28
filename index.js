function calculator() {
  return constructor(previousOperationNumber, currentOperationNumber)
  this.previousOperationNumber = previousOperationNumber
  this.currentOperationNumber = currentOperationNumber
  this.clear
}

function clear() {
  this.currentOperationNumber = ''
  this.previousOperand = ''
  this.operationOperand = undefined
}

function deleteTheNumber() {}

function appendNumber(number) {
  this.currentOperand = number
}

function chooseOperations(operation) {}

function compute() {}
function updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperand
}

function numberButtons() {
  return document.getElementById('[data-number]')
}

function operationButtons() {
  return document.getElementById('[data-operation]')
}
function equalsButton() {
  return document.querySelector('[data-equals]')
}
function deleteButton() {
  return document.querySelector('[data-delete]')
}
function allClearButtons() {
  return document.querySelector('[data-all-clear]')
}
function previousOperand() {
  return document.querySelector('[data-previous-operand]')
}
function currentOperand() {
  return document.querySelector('[data-current-operand]')
}

function calculator() {
  return new calculator(previousOperationNumber, currentOperationNumber)
}

function numberButtons() {
  return numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
}
