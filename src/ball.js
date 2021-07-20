class Ball {
  constructor (x, y, fps) {
    this.ballDia = 10
    this.ballX = x
    this.ballY = y
    this.ballVelocityX = this.randomVelocity(fps)
    this.ballVelocityY = this.randomVelocity(fps)
  }

  randomVelocity = (fps) => {
    let randVelo = Math.floor(Math.random() * 100) / fps

    if (Math.floor(Math.random() *2) == 0) {
      return randVelo = -randVelo
    } else {
      return randVelo
    }
  }

  moveBall = (displayAreaX, displayAreaY) => {
    this.ballX += this.ballVelocityX
    this.ballY += this.ballVelocityY
  }

}