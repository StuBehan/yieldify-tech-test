const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM('<html><head></head><body><canvas id="balls"></canvas></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator