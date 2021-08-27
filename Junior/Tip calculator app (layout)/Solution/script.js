// ------- Selectors

// Buttons
const btnCalc = document.querySelector('.btn-calc')
const btnReset = document.querySelector('.btn-reset');
const btnSave = document.querySelector('.btn-save');


// Input 'Number of People'
const peopleAmount = document.querySelector('.people')
// default value for input 'Number of People'
peopleAmount.value = 1

// Results box
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')


// 'Select tip %' Array
const selectsBox = document.querySelectorAll('.select')
const ulHistory = document.querySelector('.history-ul')







// ------- Starting conditions

// - изначальное значение чаевых - при клике по какой нибудь из кнопок блока select tip в эту переменную заводится значение -> -- ЮЗЕР ВЫБИРАЕМ РАЗМЕР TIP --
let tipPercent = 0;


// - значение чаевых и полной суммы счета с чаевыми (меняется при рассчете и потом при сохранении сохраняются в массив истории платежей)
let tipAmountSave = 0;
let totalAmountSave = 0;


// - массив для сохранения истории счетов и чаевых
const billHistoryArr = [
  {
    date: '21.11.2020',
    rest: 'Italiano',
    bill: 115,
    tips: 15,
    id: 0.3408496649497357
  },
  {
    date: '03.11.2020',
    rest: 'Pomidoro',
    bill: 110,
    tips: 10,
    id: 0.6647581877743634
  },
  {
    date: '13.10.2020',
    rest: 'MacDolads',
    bill: 500,
    tips: 5,
    id: 0.1647581377443634
  }
]

for (let i = 0; i < billHistoryArr.length; i++) {

  ulHistory.insertAdjacentHTML("beforeEnd", `
    <tr id='${billHistoryArr[i].id * 10}'>
      <td class='history--date-p'>${billHistoryArr[i].date}</td>
      <td class='history--rest-p'>${billHistoryArr[i].rest}</td>
      <td class='history--bill-p'>${billHistoryArr[i].bill}</td>
      <td class='history--tips-p'>${billHistoryArr[i].tips}</td>
      <td class='history--tips-p'><button id="${billHistoryArr[i].id}" class='btn_delete'>del</button></td>
    </tr>
  `)


}



let btnDelete = document.querySelectorAll('.btn_delete')

// console.log(btnDelete);




// -------  ЮЗЕР ВЫБИРАЕМ РАЗМЕР TIP из предустановленных варинатов (используем массив)
// все кнопки из блока Select tip имеют одинаоквый класс и объединены в единый массив нод по нему selectsBox
// так как это массив, то мы методом ForEach проходимся по нему и определяем какой именно нажат
selectsBox.forEach(function (select) {

  select.addEventListener('click', function () {

    // из того блока покоторому юзер кликнул мы забираем значение textContent, которое прописано в html и сохраняем его в перменную

    const percentBillOrigin = select.textContent

    // так как textContent - это string причем со знаком %, то нам во-первых нужно обрезать последний симовол %, затем привести обрезанную строку к number и привести к значению десятичной дроби проуентов - было 10%6 стало 0,1

    const percentBill = Number(percentBillOrigin.slice(0, -1) / 100)

    // переписываем переменную значнеия чаевых со стартовых 0 до выбранного

    tipPercent = percentBill


    // ---- Вставляем значения в TipAmount и Total

    // Размер счета
    const inputBillNumber = Number(document.querySelector('.bill').value)


    // Количество людей (по умолчанию предустановленно 1)
    const peopleAmount = Number(document.querySelector('.people').value)


    // Если выбран вариант чаевых, то размер их > 0
    if (tipPercent > 0) {

      tipAmount.textContent = inputBillNumber * tipPercent

      totalAmount.textContent = (inputBillNumber * tipPercent + inputBillNumber) * peopleAmount


      // вставляем значение счета и чаевых в переменные, которые потом можно сохранить в массив истории чаевых 
      tipAmountSave = inputBillNumber * tipPercent
      totalAmountSave = (inputBillNumber * tipPercent + inputBillNumber) * peopleAmount



    } else {
      // если размер чаевых не выбран то забираем значение из input 

      const customInput = Number(document.querySelector('.select-tip-input').value) / 100

      tipAmount.textContent = inputBillNumber * customInput

      totalAmount.textContent = inputBillNumber * customInput * peopleAmount

    }

  })
})





btnSave.addEventListener('click', function () {

  const inputRest = document.querySelector('.people2').value

  const randomIdNumber = Math.random()


  billHistoryArr.push(
    {
      date: '',
      rest: inputRest,
      bill: totalAmountSave,
      tips: tipAmountSave,
      id: randomIdNumber
    }
  )



  ulHistory.insertAdjacentHTML("beforeEnd", `
    <tr id='${randomIdNumber * 10}'>
      <td class='history--date-p'></td>
      <td class='history--rest-p'>${inputRest}</td>
      <td class='history--bill-p'>${totalAmountSave}</td>
      <td class='history--tips-p'>${tipAmountSave}</td>
      <td class='history--tips-p'><button id="${randomIdNumber}" class='btn_delete'>del</button></td>
    </tr>
  `)


  btnDelete = document.querySelectorAll('.btn_delete')


  console.log(btnDelete);
  console.log(billHistoryArr);



})





btnReset.addEventListener('click', function () {

  tipPercent = 0;

  tipAmount.textContent = ""
  totalAmount.textContent = ""

  document.querySelector('.select-tip-input').value = ""

  document.querySelector('.bill').value = ''

  peopleAmount.value = 1

})






btnDelete.forEach(function (btn_del) {

  console.log(btn_del);

  btn_del.addEventListener('click', function () {


    console.log(btn_del);

    const delId = btn_del.id

    for (let i = 0; i < billHistoryArr.length; i++) {
      if (billHistoryArr[i].id == delId) {
        billHistoryArr.splice(i, 1)
      }
    }

    const delTr = document.getElementById(`${delId * 10}`)

    delTr.remove()

    btnDelete = document.querySelectorAll('.btn_delete')

    console.log(btnDelete);
    console.log(billHistoryArr);

  })

})







