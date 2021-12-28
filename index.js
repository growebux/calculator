function calculator() {
  return constructor(previousOperand, currentOperand)
  this.previousOperand = currentOperand
  this.currentOperand = currentOperand
  this.clear
}

function clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}

function deleteNumber() {}

function appendNumber(number) {
  this.currentOperand = number
}

function chooseOperation(operation) {}

function compute() {}

function updateDisplay() {
  this.currentOperand.innerText = this.currentOperand
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
  return new calculator(previousOperand, currentOperand)
}

function numberButtons() {
  return numberButtons.forEach((button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  }))
}

