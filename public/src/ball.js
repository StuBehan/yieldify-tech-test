class Ball {
  constructor (x, y, fps) {
    // ball constructor takes the users mouse x,y coordinates for initial location
    // fps is passed to ball to synergise the rate of redrawing with the speed of the ball
    this.ballDia = 10
    this.ballX = x
    this.ballY = y
    this.ballVelocityX = this.randomVelocity(fps)
    this.ballVelocityY = this.randomVelocity(fps)
    this.gravity = 0.2
    this.bounce = 0.75
    this.colour = this.randomColour()
    this.fps = fps
  }

  randomVelocity = (fps) => {
    // generate random number between 100 and 200, divided by fps
    let randVelo = Math.floor(Math.random() * 100 + 100) / fps

    // take the random number and randomly assign it as a negative to 
    // ensure velocities in either direction for both of x,y
    if (Math.floor(Math.random() *2) == 0) {
      return randVelo = -randVelo
    } else {
      return randVelo
    }
  }

  randomColour = () => {
    return Math.floor(Math.random()*16777215).toString(16)
    // 16777215 is the total number of colour combinations of RGB
    // toString(16) returns the random colour as a hexadecimal
  }

  moveBall = (displayAreaX, displayAreaY) => {
    // apply effects using helper functions
    this.gravityEffect(displayAreaY)
    this.stopMovement()
    this.findCanvas(displayAreaX, displayAreaY)
    this.friction()

    // change location based on velocities
    this.ballX += this.ballVelocityX
    this.ballY += this.ballVelocityY    

    // check for wall bounces for x and y 
    if (this.ballX - this.ballDia / 2 - 10 < 0 && this.ballVelocityX < 0 || 
      this.ballX + this.ballDia / 2 + 10  > displayAreaX && this.ballVelocityX > 0) {
      this.bounceEffect()
      this.ballVelocityX = -this.ballVelocityX
    }
    if (this.ballY - this.ballDia / 2 - 10 < 0 && this.ballVelocityY < 0 ||
      this.ballY + this.ballDia / 2 + 10 > displayAreaY && this.ballVelocityY > 0) {
      this.bounceEffect()
      this.ballVelocityY = -this.ballVelocityY
    }
  }

  gravityEffect = (displayAreaY) => {
    // if not resting at 'ground level' the gravity effect is applied
    // increasing velocity whilst positive, moving down, and decreasing it if
    // negative, moving up.
    if (this.ballY < displayAreaY - this.ballDia / 2 - 10) {
      this.ballVelocityY = this.ballVelocityY + this.gravity
    }
  }

  bounceEffect = () => {
    // bounce effect reduces velocity 
    this.ballVelocityX = this.ballVelocityX * this.bounce
    this.ballVelocityY = this.ballVelocityY * this.bounce
  }

  stopMovement = () => {
    // ceases small movements to reduce workload, ensures balls come to a complete stop
    if (this.ballVelocityX < 0.01 && this.ballVelocityX > -0.1) {
      this.ballVelocityX = 0
    }
    if (this.ballVelocityY < 0.01 && this.ballVelocityY > -0.1) {
      this.ballVelocityY = 0
    }
  }

  findCanvas = (displayAreaX, displayAreaY) => {
    // if balls are off the visible canvas because of a window resize this
    // function gives them velocity in the direction of the canvas to return
    // them to it. The negative sign and Math.abs() ensure that the velocities
    // are always negative
    if (this.ballX > displayAreaX) {
      this.ballVelocityX += -Math.abs(this.randomVelocity(this.fps))
    }
    if (this.ballY > displayAreaY) {
      this.ballVelocityY += -Math.abs(this.randomVelocity(this.fps))
    }
  }

  friction = () => {
    // reduces x axis velocity whenever y axis velocity is not present
    if (this.ballVelocityX !== 0 && this.ballVelocityY === 0) {
      this.ballVelocityX = this.ballVelocityX * 0.98
    }
  }
}