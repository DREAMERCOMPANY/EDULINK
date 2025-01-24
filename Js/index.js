const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const blurEffect = document.getElementById('blur')
btn.addEventListener('click', ()=> navToggle())

//Blur function
blurEffect.addEventListener('click', ()=>{
  blurEffect.classList.toggle('hidden')
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  menu.classList.toggle('animate')
})

// Toggle Mobile Menu
function navToggle() {
  blurEffect.classList.toggle('hidden')
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  menu.classList.toggle('animate')
}
