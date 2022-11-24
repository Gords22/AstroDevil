module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  code: `$djsEval[(async () => {
let opponent = message.mentions.members.first() 
const { Leaftictactoe } = require('leaf-utils')

new Leaftictactoe({
  message: message,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Juego Tic Tac Toe',
    color: 'RANDOM',
  },
  oEmoji: '⭕', 
  xEmoji: '❌',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  turnMessage: 'es el turno de **{player}**',
  waitMessage: 'Esperando al oponente...',
  askMessage: 'Oye {opponent}, {challenger} te esta retando a un juego de Tic Tac Toe',
  cancelMessage: 'Tu reto ah sido rechazado :(',
  timeEndMessage: 'No se ah respondido al reto, el juego se ah cancelado',
  drawMessage: '¡Es un empate!',
  winMessage: '**{winner}** gana el juego',
  gameEndMessage: 'El juego quedo incompleto :/',
}).startGame();
})()]
$onlyIf[$isBot[$mentioned[1]]!=true;**⚠️ | No puedes jugar con bots**]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$suppressErrors`
}