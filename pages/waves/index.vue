<template>
  <div>
    <div id="canvas_box"></div>
  </div>
</template>

<script>
import Stats from 'stats.js'
const N_LINES = 30
const N_POINTS = 12

export default {
  layout: 'sketch',
  async mounted() {
    const stats = new Stats()
    const P5 = await require('p5')

    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
    stats.domElement.style.cssText = 'position:absolute;bottom:10px;right:10px;'

    const sketch = (s) => {
      s.setup = () => {
        const canvas = s.createCanvas(window.innerWidth, window.innerHeight)
        canvas.id('canvas-' + Math.floor(1000 * s.random()))
        canvas.parent('canvas_box')
      }
      s.draw = () => {
        stats.begin()
        // s.background(10, 20, 30)
        s.background(0)

        for (let index = 0; index < N_LINES; index++) {
          const paint = s.map(index, 0, N_LINES, 0, 255)
          s.stroke(paint)
          s.noFill()
          drawLine(index)
        }

        stats.end()
      }

      s.windowResized = function () {
        s.resizeCanvas(window.innerWidth, window.innerHeight)
      }

      function drawLine(index = 0) {
        s.beginShape()
        for (let i = 0; i < N_POINTS; i++) {
          const mouseFactor = s.map(s.mouseY, 0, s.height, 0.8, 1.2)
          const x = s.map(i, 0, N_POINTS, -s.width / 8, s.width + s.width / 4)
          const y =
            s.height *
            s.noise(x * 0.001, mouseFactor * index * 0.02, s.frameCount * 0.003)
          s.curveVertex(x, y)
        }
        s.endShape()
      }
    }
    // eslint-disable-next-line no-new
    new P5(sketch, 'p5Canvas')
  },
}
</script>

<style scoped></style>
