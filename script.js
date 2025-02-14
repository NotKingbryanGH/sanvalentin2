const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura yaresita?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Segura que no?',
  'Minecraft es un juegazo',
  'Sabias que hay gatitos en minecraft?,Segura?',
  'Hay ajolotes muy lindos, segura?',
  'Es un mundo casi inifnito!',
  'Puedes explotar tu creatividad, Dale yare',
  'Sabias que es el juego mas vendido?',
  'No tiene límites, solo tu imaginación ✨',
  'Sere feliz si dices que si ⏳',
  'Sera divertido, Segura no quieres?',
  'Encerio no?',
  'Dato Secreto: BAE , significa "before anything else"',
  'Puedes construir lo que tu quieras, segura?'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})