class Calculator {
  constructor() {
    this.value = 0
    this.input = ''
    this.total = ''
    this.operator = ''
  }

  appendNumber(value) {
    this.input = this.input + value
    const currentInput = document.getElementById('input')
    currentInput.innerHTML = this.input
  }

  appendNumberAndOperator(total) {
    this.total = this.total + this.getOperation
    const previusTotal = document.getElementById('total')
    previusTotal.innerHTML = this.input
  }

  clear() {
    this.input = ''
    this.value = ''
    this.operation = undefined
  }
}
function getNumbers() {
  return document.querySelectorAll('.data-number')
}

function getOperation() {
  return document.querySelectorAll('.data-operation')
}

function initDisplay() {
  const displayInput = document.getElementById('input')
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

initDisplay()
bindClickEvents()
