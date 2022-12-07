const { copyFileSync } = require('fs')
const thumbWar = require('./thumb_war')
const utils = require('./utils')

test("return a Winner!",() => {
  const originGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('saber', 'pika')
  expect(winner).toBe('saber')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('saber', 'pika')

  // clear up
  utils.getWinner = originGetWinner
})