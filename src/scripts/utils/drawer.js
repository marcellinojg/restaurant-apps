const navbarButton = document.querySelector('#navbarButton')
const mobileNavbar = document.querySelector('#mobileNavbar')
const closeMobileNavbar = document.querySelector('#navbarCloseButton')

const links = document.querySelectorAll('.links a')

navbarButton.addEventListener('click', () => {
  mobileNavbar.classList.toggle('active')
})

closeMobileNavbar.addEventListener('click', () => {
  mobileNavbar.classList.remove('active')
})

links.forEach((e) => {
  e.addEventListener('click', () => {
    mobileNavbar.classList.remove('active')
  })
})
