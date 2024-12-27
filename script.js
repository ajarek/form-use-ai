const form = document.querySelector('form')
let open = false
const createModal = (name, email) => {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = `
  <div class="modal-content">
    <div class="close">❌</div>
    <h2>Dziękujemy ${name} za rejestrację!</h2>
    <p>Wyślemy powiadomienie na ${email}</p>
  </div>
  `
  document.body.appendChild(modal)
  const closeButton = modal.querySelector('.close')
  closeButton.addEventListener('click', () => {
    modal.remove()
    open = false
    location.reload()
  })
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = e.target[0].value
  const email = e.target[1].value

  open = true
  if (open) {
    form.style.display = 'none'
    createModal(name, email)
  }
})
