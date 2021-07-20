class Ball {
  constructor (x, y, fps) {
    this.ballDia = 10
    this.ballX = x
    this.ballY = y
    this.ballVelocityX = this.randomVelocity(fps)
    this.ballVelocityY = this.randomVelocity(fps)
    this.gravity = 0.25
  }

  randomVelocity = (fps) => {
    let randVelo = Math.floor(Math.random() * 100 + 100) / fps

    if (Math.floor(Math.random() *2) == 0) {
      return randVelo = -randVelo
    } else {
      return randVelo
    }
  }

  moveBall = (displayAreaX, displayAreaY) => {
    this.ballX += this.ballVelocityX
    this.ballY += this.ballVelocityY

    if (this.ballX - this.ballDia - 10 / 2 < 0 && this.ballVelocityX < 0 || 
      this.ballX + this.ballDia + 10 / 2 > displayAreaX && this.ballVelocityX > 0) {
      this.ballVelocityX = -this.ballVelocityX
    }
    if (this.ballY - this.ballDia - 10 / 2 < 0 && this.ballVelocityY < 0 ||
      this.ballY + this.ballDia + 10 / 2 > displayAreaY && this.ballVelocityY > 0) {
      this.ballVelocityY = -this.ballVelocityY
    }
  }
}