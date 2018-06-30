export class Cell {
  constructor(x, y, grid) {
    this.x = x
    this.y = y
    this.grid = grid
    this.scale = grid.scale

    this.visited = false

    this.sides = {
      top: true,
      right: true,
      bottom: true,
      left: true
    }
  }

  draw() {
    const { x, y, scale, sides } = this
    const x1 = x * scale
    const x2 = x1 + scale
    const y1 = y * scale
    const y2 = y1 + scale

    noFill()
    stroke(0)
    strokeWeight(2)
    if (sides.top) line(x1, y1, x2, y1)
    if (sides.right) line(x2, y1, x2, y2)
    if (sides.bottom) line(x1, y2, x2, y2)
    if (sides.left) line(x1, y1, x1, y2)

    if (this.visited) {
      fill(255)
      noStroke()
      rect(x1 + 1, y1 + 1, scale - 2, scale - 2)
    }
  }

  highlight() {
    const { x, y, scale } = this
    const x1 = x * scale
    const y1 = y * scale

    fill(255, 0, 0, 100)
    noStroke()
    rect(x1, y1, scale, scale)
  }

  get unvisitedNeighbours() {
    return this.neighbours.filter(cell => cell && !cell.visited)
  }

  get neighbours() {
    const { grid, x, y } = this
    return [
      grid.getCell(x, y - 1), // top
      grid.getCell(x + 1, y), // right
      grid.getCell(x, y + 1), // bottom
      grid.getCell(x - 1, y) // left
    ]
  }

  get hasUnvisitedNeighbours() {
    return this.unvisitedNeighbours.length > 0
  }
}

export default Cell
