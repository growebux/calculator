class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = currentOperand
    this.currentOperand = currentOperand
    this.clear
  }

  appendNumber(value) {
    this.currentOperand = value
    console.log(value)
  }
}

function clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}

function deleteNumber() {}

function chooseOperation(operation) {}

function compute() {}

function updateDisplay() {
  this.currentOperand.innerText = this.currentOperand
}

function getNumbers() {
  return document.querySelectorAll('data-number')
}

function operationButtons() {
  return document.querySelector('[data-operation]').innerText
}
function equalsButton() {
  return document.querySelector('[data-equals]').innerText
}
function deleteButton() {
  return document.querySelector('[data-delete]').innerText
}
function allClearButtons() {
  return document.querySelector('[data-all-clear]').innerText
}
function previousOperand() {
  return document.querySelector('[data-previous-operand]').innerText
}
function currentOperand() {
  return document.querySelector('[data-current-operand]').innerText
}

// function calculator() {
//   return new calculator(previousOperand, currentOperand)
// }

function bindClickEvents() {
  getNumbers().forEach((button) => {
    button.addEventListener('click', () => {
      const _calculator = new Calculator()
      _calculator.appendNumber(button.innerText)
      _calculator.updateDisplay()
    })
  })
}
