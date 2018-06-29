import Grid from './Grid.mjs'

const size = 600
const scale = 20
let grid

window.setup = () => {
  const renderer = createCanvas(size, size)
  renderer.canvas.id = 'mainCanvas'
  grid = new Grid(size, scale)

  loop()
  document.getElementById('restart').addEventListener('click', window.setup)
}

window.draw = () => {
  background(0)
  grid.next()
  grid.draw()
}
