const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura mi reina',
  'Piensalo bien que no habrá otra oportunidad',
  'Dale di que si mi niña',
  'Ya no rogare más bebé',
  'Yaa me voy a enojar' ,
  'Vamoooooooooooos corazón',
  'Me estoy enojando',
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