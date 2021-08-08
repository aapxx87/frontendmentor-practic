// Selectors

// Buttons
const btnCalc = document.querySelector('.btn-calc')
const btnReset = document.querySelector('.btn-reset');

// Input 'Number of People'
const peopleAmount = document.querySelector('.people')
// default value for input 'Number of People'
peopleAmount.value = 1

// Results box
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')


// 'Select tip %' Array
const selectsBox = document.querySelectorAll('.select')


// Starting conditions
let tipPercent = 0;



// выбираем размер tip из предустановленных варинатов (используем массив)
selectsBox.forEach(function (select) {

  select.addEventListener('click', function () {

    const percentBillOrigin = select.textContent

    const percentBill = Number(percentBillOrigin.slice(0, -1) / 100)

    tipPercent = percentBill

  })
})



btnCalc.addEventListener('click', function () {


  // Размер счета
  const inputBillNumber = Number(document.querySelector('.bill').value)


  // Количество людей (по умолчанию предустановленно 1)
  const peopleAmount = Number(document.querySelector('.people').value)


  // Если выбран вариант чаевых, то размер их > 0
  if (tipPercent > 0) {

    tipAmount.textContent = inputBillNumber * tipPercent

    totalAmount.textContent = inputBillNumber * tipPercent * peopleAmount

  } else {
    // если размер чаевых не выбран то забираем значение из input 

    const customInput = Number(document.querySelector('.select-tip-input').value) / 100

    tipAmount.textContent = inputBillNumber * customInput

    totalAmount.textContent = inputBillNumber * customInput * peopleAmount

  }

})



btnReset.addEventListener('click', function () {

  tipPercent = 0;

  tipAmount.textContent = ""
  totalAmount.textContent = ""

  document.querySelector('.select-tip-input').value = ""

  document.querySelector('.bill').value = ''

  peopleAmount.value = 1

})