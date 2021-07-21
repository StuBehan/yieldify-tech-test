const jsdom = require('jsdom')
const { JSDOM } = jsdom;

let dom = new JSDOM('<html><head></head><body><canvas id="balls"></canvas></body></html>')
global.window = dom.window

global.document = dom.window.document

describe ('DisplayArea', () => {

  let display

  describe ('on creation', () => {
    it('renders an outline of the canvas', () => {
      expect(display.contx.lineWidth).toBe(5)
    })
  })
})

