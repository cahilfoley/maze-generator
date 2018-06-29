import Grid from './Grid.mjs'

const size = 600
const scale = 20
let grid

window.setup = () => {
  createCanvas(size, size)
  grid = new Grid(size, scale)
}

window.draw = () => {
  background(0)
  grid.next()
  grid.draw()
}
