class Calculator {
  constructor() {
    this.value = 0
    this.input = ''
    this.displayInput = 0
  }

  appendNumber(value) {
    this.input = this.input + value
    const currentInput = document.getElementById('input')
    currentInput.innerHTML = this.input
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

function updateNumber() {
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

updateNumber()
bindClickEvents()
