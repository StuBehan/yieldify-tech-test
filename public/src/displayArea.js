class DisplayArea {
  constructor() {
    // initializes an array to hold the ball objects, sets fps, and the canvas context
    this.balls = []
    this.fps = 60
    this.canvas = document.getElementById('balls')
    this.contx = this.canvas.getContext('2d')

    // inits the simulation on object creation
    this.initCanvas()
  }
  
  initCanvas = () => {
    // finds the window size using the handleResize function
    this.handleResize()

    // add event listeners for window resizing and click
    window.addEventListener('resize', this.handleResize, false)
    window.addEventListener('click', this.handleClick, false)

    // use setInterval to run the ball simulation at rate of the designated fps
    setInterval(this.redraw, 1000 / this.fps)
  }
  
  handleResize = () => {
    // resizes the canvas to window size
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    // redraws canvas with the new dimentions
    this.draw()
  }
  
  draw = () => {
    // uses the context to paint the background and border
    this.contx.beginPath()
    this.contx.fillStyle = 'white'
    this.contx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.contx.strokeStyle = 'black'
    this.contx.lineWidth= '10'
    this.contx.strokeRect(0, 0, this.canvas.width, this.canvas.height)
  }

  handleClick = (event) => {
    // on click creates a new ball object and pushes it to the balls array
    // using the mouse click location for its initial position
    this.balls.push(new Ball(event.clientX, event.clientY, this.fps))
  }

  redraw = () => {
    // redraws the background to eliminate the previous frame
    this.draw()

    // iterate through the array of ball objects to carry out each individual
    // ball movement then redraws the balls depending on their location
    this.balls.forEach(ball => {
      ball.moveBall(this.canvas.width, this.canvas.height)
      this.contx.fillStyle = `#${ball.colour}`
      this.contx.beginPath()
      this.contx.arc(ball.ballX, ball.ballY, ball.ballDia, 0, Math.PI * 2)
      this.contx.fill()
    })
  }
}

// creates an instance of the DisplayArea class on page load to initaite the simulation
let display = new DisplayArea()
