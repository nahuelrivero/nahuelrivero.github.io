let myModal = document.getElementById('exampleModal')
let myInput = document.getElementById('btn-submit')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})