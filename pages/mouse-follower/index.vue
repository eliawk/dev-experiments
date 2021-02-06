<template>
  <div>
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import Stats from 'stats.js'
import Shape from './shape'

export default {
  layout: 'sketch',
  async mounted() {
    const stats = new Stats()
    const P5 = await require('p5')

    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
    stats.domElement.style.cssText = 'position:absolute;bottom:10px;right:10px;'
    let c
    const sketch = (s) => {
      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight)
        s.background(33, 33, 33)
        c = new Shape(s, s.width / 2, s.height / 2)
        // c.update(s.width / 2, s.height / 2)
      }
      s.draw = () => {
        stats.begin()
        s.background(33, 33, 33)
        c.update(s.mouseX, s.mouseY)
        stats.end()
      }

      s.windowResized = function () {
        s.resizeCanvas(window.innerWidth, window.innerHeight)
      }
    }
    // eslint-disable-next-line no-new
    new P5(sketch, 'p5Canvas')
  },
}
</script>

<style scoped></style>
