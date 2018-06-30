import Cell from './Cell.mjs'

export class Grid {
  constructor(size, scale) {
    this.size = size
    this.scale = scale
    this.cols = size / scale
    this.rows = size / scale

    this.cells = []
    for (let x = 0; x < this.cols; x++) {
      this.cells[x] = []
      for (let y = 0; y < this.rows; y++) {
        this.cells[x][y] = new Cell(x, y, this)
      }
    }

    this.stack = []
    this.current = this.cells[0][0]
    this.current.visited = true

    // Set the entrance and exit
    this.cells[0][0].sides.top = false
    this.cells[this.cols - 1][this.rows - 1].sides.bottom = false
  }

  draw() {
    this.cells.forEach(col => {
      col.forEach(cell => {
        cell.draw()
      })
    })
    this.stack.forEach(cell => {
      cell.highlight()
    })
  }

  next() {
    const { current, stack } = this
    if (current.hasUnvisitedNeighbours) {
      const next = random(current.unvisitedNeighbours)

      // Remove sides between the two cells
      if (current.y > next.y) {
        // current is below next
        current.sides.top = false
        next.sides.bottom = false
      } else if (current.x < next.x) {
        // current is left of next
        current.sides.right = false
        next.sides.left = false
      } else if (current.y < next.y) {
        // current is above next
        current.sides.bottom = false
        next.sides.top = false
      } else {
        // current is right of next
        current.sides.left = false
        next.sides.right = false
      }

      current.draw()
      next.visited = true
      next.draw()

      stack.push(current)
      this.current = next
    } else if (stack.length) {
      this.current = stack.pop()
    } else {
      noLoop()
    }
  }

  getCell(x, y) {
    const { cols, rows } = this
    if (x < 0 || x > cols - 1 || y < 0 || y > rows - 1) return undefined
    return this.cells[x][y]
  }
}

export default Grid
