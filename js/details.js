const button = document.querySelector('.content__button')
const buttonText = button.querySelector('.content__button_text')
const main = document.querySelector('.main')
const details = document.querySelector('.details')



button.addEventListener('click', () => {
  details.classList.toggle('vision')
  console.log(details.classList.contains('vision'));
  if (details.classList.contains('vision')) {
    buttonText.style.left = '2.5em'
    buttonText.innerHTML = 'Свернуть<br> окно'
  } else {
    buttonText.style.left = '1.8em'
    buttonText.innerHTML = 'Подробнее <br> о фитобочках'
  }
})