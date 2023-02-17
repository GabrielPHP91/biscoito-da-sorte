const messages = [
  'Acredite em si mesmo e conquiste o mundo.',
  'A sorte estará ao seu lado em breve.',
  'A vida é uma aventura, aproveite cada momento.',
  'A persistência é a chave do sucesso.',
  'A vida é um presente, abra-o com gratidão.',
  'A sabedoria começa com a humildade.',
  'O fracasso é uma oportunidade para aprender e crescer.',
  'As coisas boas da vida levam tempo, seja paciente.',
  'A beleza está nos olhos de quem vê.',
  'Seja a mudança que deseja ver no mundo.',
  'Grandes realizações exigem grande esforço.',
  'A vida é uma jornada, aproveite o caminho.',
  'A sorte está a seu favor, siga em frente.',
  'Boas coisas estão por vir, continue perseverando.',
  'Seja gentil com os outros e a vida lhe recompensará.',
  'Tudo é possível quando você acredita em si mesmo.',
  'O fracasso não é o fim, é apenas o começo de uma nova oportunidade.',
  'A felicidade está dentro de você, encontre-a e compartilhe-a.',
  'Aprenda com o passado, viva o presente e sonhe com o futuro.',
  'Cada novo dia é uma bênção, aproveite ao máximo.'
]

const gerateMessage = document.getElementById('biscoito')
const btnTry = document.querySelector('#btnTry')
const message = document.getElementById('textMessage')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

// funções

function randomMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  message.textContent = randomMessage
}

function tryMessage() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}

function hideScreen1() {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
  randomMessage()
  hideScrren1()
}

//call backs

gerateMessage.addEventListener('click', hideScreen1)
btnTry.addEventListener('click', tryMessage)
