import Cell from './Cell.mjs'

/**
 * The base class for all grids
 * @param {number} size The size of the grid in pixels
 * @param {number} scale The size of each cell in pixels
 */
class Grid {
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

    // Set the entrance and exit
    this.cells[0][0].sides.top = false
    this.cells[this.cols - 1][this.rows - 1].sides.bottom = false
  }

  /**
   * Calls the draw method on each cell
   */
  draw() {
    this.cells.forEach(col => {
      col.forEach(cell => {
        cell.draw()
      })
    })
  }

  /**
   * Lookup a cell
   * @param  {number} x The column index
   * @param  {number} y The row index
   * @return {Cell|undefined} The cell if it exists or undefined if not
   */
  getCell(x, y) {
    const { cols, rows } = this
    if (x < 0 || x > cols - 1 || y < 0 || y > rows - 1) return undefined
    return this.cells[x][y]
  }

  /**
   * Remove the borders seperating two cells
   * @param  {Cell} a The first cell to join
   * @param  {Cell} b The second cell to join
   */
  joinCells(a, b) {
    // Remove sides between the two cells
    if (a.y > b.y) {
      // a is below b
      a.sides.top = false
      b.sides.bottom = false
    } else if (a.x < b.x) {
      // a is left of b
      a.sides.right = false
      b.sides.left = false
    } else if (a.y < b.y) {
      // a is above b
      a.sides.bottom = false
      b.sides.top = false
    } else {
      // a is right of b
      a.sides.left = false
      b.sides.right = false
    }
  }
}

export default Grid
