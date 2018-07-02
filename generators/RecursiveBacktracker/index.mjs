import Grid from '../../Grid.mjs'

class RecursiveBacktracker extends Grid {
  constructor(size, scale) {
    super(size, scale)

    this.stack = []
    this.current = this.cells[0][0]
    this.current.visited = true
  }

  draw() {
    super.draw()
    this.stack.forEach(cell => {
      cell.highlight()
    })
  }

  next() {
    const { current, stack } = this
    if (current.hasUnvisitedNeighbours) {
      const next = random(current.unvisitedNeighbours)

      // Remove sides between the two cells
      super.joinCells(current, next)

      current.draw()
      next.visited = true
      next.draw()

      stack.push(current)
      this.current = next
    } else if (stack.length) {
      this.current = stack.pop()
    } else {
      background(255)
      this.draw()
      noLoop()
    }
  }
}

RecursiveBacktracker.title = `Recursive Backtracker`
RecursiveBacktracker.description =
  'Uses a depth-first search algorithm with recursive backtracking.'

window.Grid = RecursiveBacktracker

export default RecursiveBacktracker
