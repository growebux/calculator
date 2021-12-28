class Calculator {
  constructor() {
    this.value = 0
    this.currentNumber = ''
    this.previousNumber = ''
    this.operator = ''
  }

  appendNumber(value) {
    this.currentNumber = this.currentNumber + value
    const currentInputNumber = document.getElementById('currentNumber')
    currentInputNumber.innerHTML = this.currentNumber
  }

  clear() {
    this.currentNumber = ''
    this.value = ''
    this.operation = undefined
  }

  display(operation) {
    this.currentNumber = currentNumber
    this.previousOperator = this.operator
    this.operator
  }
}

function getNumbers() {
  return document.querySelectorAll('.data-number')
}

function getOperator() {
  return document.querySelectorAll('.data-operation')
}

function initDisplay() {
  const displayInput = document.getElementById('currentNumber')
  displayInput.innerHTML = 0
}

function bindClickEvents() {
  const _calculator = new Calculator()
  getNumbers().forEach((button) => {
    button.addEventListener('click', () => {
      _calculator.appendNumber(button.innerText)
    })
  })
}

function bindClickEventsOperator() {
  const _calculator = new Calculator()
  getOperator().forEach((button) => {
    button.addEventListener('click', () => {
      _calculator.appendNumber(button.innerText)
    })
  })
}

initDisplay()
bindClickEvents()
bindClickEventsOperator()
