document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone')

  phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '') // Remove tudo que não for número

    // Limita a 11 dígitos
    value = value.substring(0, 11)

    // Aplica a máscara: (XX) X XXXX-XXXX
    if (value.length > 0) {
      value = '(' + value
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ') ' + value.slice(3)
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + '-' + value.slice(10)
    }

    e.target.value = value
  })
})
