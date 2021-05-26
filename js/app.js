const burger = document.querySelector('.nav__links-burger')
const mobileMenu = document.querySelector('.mobile_nav')
const listItem1 = document.querySelector('.item1')
const listItem2 = document.querySelector('.item2')
const listItem3 = document.querySelector('.item3')


burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')
    burger.classList.toggle('is-active')
})

listItem1.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')
})
listItem2.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')
})
listItem3.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')

})
