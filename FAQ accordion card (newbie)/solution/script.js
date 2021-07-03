const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const icons = document.querySelectorAll('.icon')



questions.forEach(function(question, idx) {


  question.addEventListener('click', function() {

    answers.forEach(function(answer) {
      answer.classList.remove('visible')
    })

    questions.forEach(function(question) {
      question.classList.remove('active')
    })

    
    icons.forEach(function(icon) {
      icon.classList.remove('icon-down')
    })


    // делаем блок ответа видимым
    answers[idx].classList.toggle('visible')


    // делаем выбранный заголовок вопроса жирным при клике
    questions[idx].classList.add('active')


    // переворачиваем иконку стрелочки в обратную сторону
    icons[idx].classList.add('icon-down')
  })
})
