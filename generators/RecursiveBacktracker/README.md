# Depth-first Search w/ Recursive Backtracker

- [Death-first Search](https://en.wikipedia.org/wiki/Depth-first_search)
- [Backtracking](https://en.wikipedia.org/wiki/Backtracking)

## Process

1.  Make the initial cell the current cell and mark it as visited
1.  While there are unvisited cells
    1.  If the current cell has any neighbours which have not been visited
        1.  Choose randomly one of the unvisited neighbours
        1.  Push the current cell to the stack
        1.  Remove the wall between the current cell and the chosen cell
        1.  Make the chosen cell the current cell and mark it as visited
    1.  Else if stack is not empty
        1.  Pop a cell from the stack
        1.  Make it the current cell
