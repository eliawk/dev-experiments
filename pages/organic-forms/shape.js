function Shape(s, c, index) {
  this.x = s.width / 2
  this.y = s.height / 2
  this.alpha = c
  this.position = s.createVector(this.x, this.y)
  this.radius = 100 * (index * 0.4 + 1)
  this.noise = index * 0.1 // s.random(100)
  this.noisePos = index * 0.1
  this.resolution = 50
  this.points = []

  this.update = function (index) {
    const xnoise = s.noise(this.noisePos) * 100
    const ynoise = s.noise(this.noisePos) * 100

    if (s.mouseIsPressed) {
      s.fill(255, 220)
      s.stroke(255 - this.alpha, this.alpha)
    } else {
      s.fill(10, 220)
      s.stroke(this.alpha, this.alpha)
    }

    s.beginShape()
    for (let a = 0; a < s.TWO_PI; a += s.TWO_PI / this.resolution) {
      let mouseXVariant = 1
      if (s.mouseX > s.width / 2) {
        mouseXVariant = s.map(s.mouseX, s.width / 2, s.width, 1, 0.8)
      } else {
        mouseXVariant = s.map(s.mouseX, 0, s.width / 2, 0.8, 1)
      }
      const mouseYVariant = s.map(s.mouseY, 0, s.height, -0.2, 0.2)

      const nosiseXoff = s.map(s.cos(a), -1, 1, 0, 1)
      const noiseYoff = s.map(s.sin(a), -1, 1, 0, 1)
      const variant = s.map(
        s.noise(nosiseXoff, noiseYoff, this.noise),
        0.0,
        1.0,
        0.5 + mouseYVariant,
        1.0
      )

      const x =
        xnoise +
        this.position.x +
        s.cos(a) * this.radius * variant * mouseXVariant

      const y =
        ynoise +
        this.position.y +
        s.sin(a) * this.radius * variant * mouseXVariant
      this.points.push({ x, y })
      s.curveVertex(x, y)
    }
    s.endShape(s.CLOSE)
    this.noise += 0.02
    this.noisePos += 0.01
  }
}

module.exports = Shape
