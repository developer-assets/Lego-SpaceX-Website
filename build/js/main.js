const initApp = () => {
  const hambugerBtn = document.getElementById('hambuger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hambugerBtn.classList.toggle('toggle-btn')
  }

  hambugerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)