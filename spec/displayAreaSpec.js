const DisplayArea = require('../public/src/displayArea')

describe ('DisplayArea', () => {

  let display = new DisplayArea()

  describe ('on creation', () => {
    it('renders an outline of the canvas', () => {
      expect(display.contx.lineWidth).toBe(5)
    })
  })
})

