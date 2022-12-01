const button = document.querySelector('.content__button')
const buttonText = button.querySelector('.content__button_text')
const end = document.querySelector('.end')
const max = document.querySelector('.max')



button.addEventListener('click', () => {
  end.style.display = "none";
  button.style.display = "none";
  max.style.display = "block";
})