import { screen } from '@testing-library/dom'

const testDisplay = require('../src/displayArea')

test('render an outline of the canvas', () => {
  screen.document.body.innerHTML = `
  <canvas id='balls'>
    Ball bouncing game.
  </canvas>`  

  const canvas = document.getElementById('balls')
  const contx = canvas.getContext('2d')

  expect(contx.lineWidth).toBe(5)
})