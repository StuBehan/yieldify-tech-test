class Ball {
  constructor (x, y, fps) {
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
    let randVelo = Math.floor(Math.random() * 100 + 100) / fps

    if (Math.floor(Math.random() *2) == 0) {
      return randVelo = -randVelo
    } else {
      return randVelo
    }
  }

  randomColour = () => {
    return Math.floor(Math.random()*16777215).toString(16)
    // 16777215 is the total number of colour combinations of RGB
  }

  moveBall = (displayAreaX, displayAreaY) => {
    this.gravityEffect(displayAreaY)
    this.stopMovement(displayAreaY)
    this.findCanvas(displayAreaX, displayAreaY)

    this.ballX += this.ballVelocityX
    this.ballY += this.ballVelocityY    

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
    if (this.ballY < displayAreaY - this.ballDia / 2 - 10) {
      this.ballVelocityY = this.ballVelocityY + this.gravity
    }
  }

  bounceEffect = () => {
    this.ballVelocityX = this.ballVelocityX * this.bounce
    this.ballVelocityY = this.ballVelocityY * this.bounce
  }

  stopMovement = (displayAreaY) => {
    if (this.ballVelocityX < 0.01 && this.ballVelocityX > -0.1) {
      this.ballVelocityX = 0
    }
    if (this.ballVelocityY < 0.01 && this.ballVelocityY > -0.1) {
      this.ballVelocityY = 0
    }
  }

  findCanvas = (displayAreaX, displayAreaY) => {
    if (this.ballX > displayAreaX) {
      this.ballVelocityX += -Math.abs(this.randomVelocity(this.fps))
    }
    if (this.ballY > displayAreaY) {
      this.ballVelocityY += -Math.abs(this.randomVelocity(this.fps))
    }
  }
}