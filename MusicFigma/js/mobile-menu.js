let ham = document.getElementById("mobileMenu__hamburger")
let mobMenu = document.getElementById("mobileMenu__menu")
let closeMenuBtn = document.getElementById("mobileMenu__close")

mobMenu.addEventListener('click', ()=>{
    closeMenu()
})

ham.addEventListener('click', ()=>{
    openMenu()
})

closeMenuBtn.addEventListener('click', ()=>{
    closeMenu()
})

function openMenu(){
    mobMenu.classList.add("mobileMenu-active")
}

function closeMenu(){
    mobMenu.classList.remove("mobileMenu-active")
}