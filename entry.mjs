const Grid = window.Grid

const size = 600
const scale = 40
let grid

window.title = Grid.title
const title = document.getElementById('title')
title.innerHTML = Grid.title

const description = document.getElementById('description')
description.innerHTML = Grid.description

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
  background(255, 255, 255, 50)
  grid.draw()
  grid.next()
}
