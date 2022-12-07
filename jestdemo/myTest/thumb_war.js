const utils = require('./utils')

// 拇指战争的方法
function thumbWar(player1, player2) {
  const numberToWin = 2
  let player1Wins = 0
  let player2Wins = 0
  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = utils.getWinner(player1, player2)
    if (winner === player1) player1Wins++
    else if (winner === player2) player1Wins++
  }
  return player1Wins > player2Wins ? player1 : player2
}

module.exports = thumbWar