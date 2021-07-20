class DisplayArea {
  constructor() {
    this.balls = []
    this.fps = 60
    this.canvas = document.getElementById('balls')
    this.contx = this.canvas.getContext('2d')
    this.initCanvas()
  }
  
  initCanvas = () => {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
    window.addEventListener('click', this.handleClick, false)
    setInterval(this.redraw, 1000 / this.fps)
  }
  
  handleResize = () => {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.draw()
  }
  
  draw = () => {
    this.contx.beginPath()
    this.contx.fillStyle = 'white'
    this.contx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.contx.strokeStyle = 'green'
    this.contx.lineWidth= '10'
    this.contx.strokeRect(0, 0, window.innerWidth, window.innerHeight)
  }

  handleClick = (event) => {
    this.balls.push(new Ball(event.clientX, event.clientY, this.fps))
  }

  redraw = () => {
    this.draw()
    this.balls.forEach(ball => {
      ball.moveBall(window.innerHeight, window.innerWidth)

      this.contx.fillStyle = 'red'
      this.contx.beginPath()
      this.contx.arc(ball.ballX, ball.ballY, ball.ballDia, 0, Math.PI * 2)
      this.contx.fill()
    })
  }
}

let display = new DisplayArea()
