class DisplayArea {
  constructor() {
    this.canvas = document.getElementById('balls')
    this.contx = this.canvas.getContext('2d')
    this.initCanvas()
  }
  
  initCanvas = () => {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
    window.addEventListener('click', this.handleClick, false)
  }
  
  handleResize = () => {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.draw()
  }
  
  draw = () => {
    this.contx.beginPath()
    this.contx.strokeStyle = 'green'
    this.contx.lineWidth= '5'
    this.contx.strokeRect(0, 0, window.innerWidth, window.innerHeight)
  }

  handleClick = (event) => {
    console.log(`click ${event.clientX} X ${event.clientY} Y`)
    this.contx.fillStyle = 'red'
    this.contx.beginPath()
    this.contx.arc(event.clientX, event.clientY, 15, 0, Math.PI * 2)
    this.contx.fill()
  }
}

let display = new DisplayArea()
