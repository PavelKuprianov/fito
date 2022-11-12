const button = document.querySelector('.content__button')
const buttonText = button.querySelector('.content__button_text')
const plus = document.querySelector('.plus')



button.addEventListener('click', () => {
  plus.classList.toggle('vision')
  console.log(plus.classList.contains('vision'));
  if (plus.classList.contains('vision')) {
    buttonText.style.left = '3.5em'
    buttonText.innerHTML = 'Свернуть<br> окно'
  } else {
    buttonText.style.left = '1.8em'
    buttonText.innerHTML = 'Подробнее <br> о преимуществах'
  }
})