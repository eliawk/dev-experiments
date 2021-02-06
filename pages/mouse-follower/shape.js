function Shape(s, x, y) {
  this.x = s.width / 2
  this.y = s.height / 2
  this.position = s.createVector(this.x, this.y)
  this.velocity = s.createVector(0, 0)
  this.acceleration = s.createVector(0, 0)
  this.radius = 100
  this.radius_noise = 0
  this.resolution = 150
  this.points = []

  this.update = function (pointerX, pointerY) {
    // const P5 = require('p5')
    // this.applyForce(this.mouseForce())

    // this.velocity.setMag(1)

    // this.velocity.add(this.acceleration)
    // this.position.add(this.velocity)
    // this.acceleration.mult(0.6)

    s.noFill()
    // console.log('update')

    s.stroke(255)

    // s.push() // Start a new drawing state
    // s.translate(pointerX, pointerY)
    // const pointerPos = s.createVector(s.mouseX, s.mouseY)
    // const distance = P5.Vector.dist(this.position, pointerPos)
    s.beginShape()
    for (let a = 0; a < s.TWO_PI; a += s.TWO_PI / this.resolution) {
      const xoff = s.map(s.cos(a), -1, 1, 0, 1)
      const yoff = s.map(s.sin(a), -1, 1, 0, 1)
      const variant = s.map(
        s.noise(xoff, yoff, this.radius_noise),
        0.0,
        1.0,
        0.7,
        1.0
      )
      // const variant = 1
      const x = this.position.x + s.cos(a) * this.radius * variant
      const y = this.position.y + s.sin(a) * this.radius * variant
      this.points.push({ x, y })
      s.curveVertex(x, y)
      // s.ellipse(x, y, 5, 5)
    }
    s.endShape(s.CLOSE)
    this.radius_noise += 0.05
    // s.pop()
  }

  this.applyForce = function (force) {
    // console.log(force)
    this.acceleration.add(force)
  }

  this.mouseForce = function () {
    const P5 = require('p5')

    const pointerPos = s.createVector(s.mouseX, s.mouseY)
    const forceVector = P5.Vector.sub(pointerPos, this.position) // A vector pointing from the location to the target
    // forceVector.normalize()
    forceVector.mult(0.1)
    return forceVector
  }
}

module.exports = Shape
