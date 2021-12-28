class Calculator {
  constructor() {
    this.value = 0
    this.currentNumber = ''
    this.previousNumber = ''
    this.operation = ''
  }

  appendNumber(value) {
    this.currentNumber = this.currentNumber + value
    const currentInputNumber = document.getElementById('currentNumber')
    currentInputNumber.innerHTML = this.currentNumber
  }

  clear() {
    this.currentNumber = ''
    this.previousNumber = ''
    this.operation = undefined
  }

  chooseOperation(operation) {
    this.operation = operation
    this.previousNumber = this.currentNumber
    this.currentNumber = ''
  }

  displayUpdate() {
    this.currentNumber = this.currentNumber
    this.currentNumber = this.previousNumber
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
      _calculator.chooseOperation(button.innerText)
    })
  })
}

initDisplay()
bindClickEvents()
bindClickEventsOperator()
