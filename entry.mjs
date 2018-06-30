import Grid from './Grid.mjs'

const size = 600
const scale = 40
let grid

window.setup = () => {
  frameRate(60)
  const renderer = createCanvas(size + 2, size + 2)
  renderer.canvas.id = 'mainCanvas'
  grid = new Grid(size, scale)

  loop()
  document.getElementById('restart').addEventListener('click', window.setup)
}

window.draw = () => {
  translate(1, 1)
  background(255)
  grid.next()
  grid.draw()
}
