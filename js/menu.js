const burger = document.querySelector('.burger')
const close = document.querySelector('.cross')
const menuField = document.querySelector('.header__list-menu')
const linkMenu = menuField.querySelectorAll('.link-menu')

const classAdd = () => {
  menuField.classList.toggle('active')
}

burger.addEventListener('click', () => {
  classAdd()
})

close.addEventListener('click', () => {
  classAdd()
})

linkMenu.forEach((elem) => {
  elem.addEventListener('click', () => {
    classAdd()
  })
})