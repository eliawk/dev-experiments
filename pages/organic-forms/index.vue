<template>
  <div>
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import Shape from './shape'

export default {
  layout: 'sketch',
  async mounted() {
    const P5 = await require('p5')
    const MAX_SHAPES = 30
    const shapesArray = []

    const sketch = (s) => {
      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight)
        for (let index = 0; index <= MAX_SHAPES; index++) {
          const paint = s.map(index, 0, MAX_SHAPES, 255, 0)

          const shape = new Shape(s, paint, index)
          shapesArray.push(shape)
        }
      }
      s.draw = () => {
        if (s.mouseIsPressed) {
          s.background(255)
        } else {
          s.background(10)
        }

        for (let index = MAX_SHAPES; index >= 0; index--) {
          shapesArray[index].update(index)
        }
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
