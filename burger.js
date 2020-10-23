const menu = document.querySelector('.list-container')
const burgerBotton = document.querySelector('.burger-menu')
burgerBotton.addEventListener('click',hideShow)
function hideShow(){
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
}