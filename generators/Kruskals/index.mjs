import Grid from '../Grid.mjs'
import { shuffle } from '../helpers.mjs'

class Kruskals extends Grid {
  constructor(size, scale) {
    super(size, scale)

    this.walls = []

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const cell = this.getCell(x, y)
        cell.set = x + x * this.cols + y
        if (cell.x !== this.cols - 1) {
          this.walls.push({
            cell,
            side: 'right'
          })
        }

        if (cell.y !== this.rows - 1) {
          this.walls.push({
            cell,
            side: 'bottom'
          })
        }
      }
    }

    this.currentWall = 0
    shuffle(this.walls)
  }

  next() {
    const wall = this.walls[this.currentWall++]
    const current = wall.cell
    const next =
      wall.side === 'right'
        ? super.getCell(current.x + 1, current.y)
        : super.getCell(current.x, current.y + 1)

    // If cells are in different sets, merge them
    if (current.set !== next.set) {
      this.joinSets(current, next)
    }

    if (this.currentWall >= this.walls.length) {
      background(255)
      this.draw()
      return noLoop()
    }

    current.highlight()
    next.highlight()
  }

  joinSets(a, b) {
    // Remove borders
    super.joinCells(a, b)

    // Merge sets
    const newSet = a.set
    const oldSet = b.set
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        // If the cell is part of the old set, update it to the new set
        const cell = super.getCell(x, y)
        if (cell.set === oldSet) {
          cell.set = newSet
        }
      }
    }
  }
}

Kruskals.title = `Kruskal's Algorithm`
Kruskals.description = `Uses a randomize version of Kruskal's algorithm.`

window.Grid = Kruskals

export default Kruskals
