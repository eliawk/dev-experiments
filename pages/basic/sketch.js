function Circle(s, x, y) {
  this.x = x
  this.y = y

  this.update = function (x, y) {
    s.ellipse(x, y, 50, 50)
  }
}

module.exports = Circle
