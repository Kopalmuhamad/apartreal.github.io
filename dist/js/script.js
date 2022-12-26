const hamburgerMenu = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu')
const shadow = document.querySelector('.shadow')

hamburgerMenu.onclick = function () {
    menu.classList.toggle("active")
    shadow.classList.toggle("active")
}

shadow.onclick = function () {
    menu.classList.remove("active")
    shadow.classList.remove("active")
}