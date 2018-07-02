# Kruskal's Algorithm

[Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)

## Process

1.  Start with a grid of walls
1.  Create a list of all walls, and create a set for each cell, each containing just that one cell.
1.  For each wall, in some random order:
    1.  If the cells divided by this wall belong to distinct sets:
        1.  Remove the current wall.
        1.  Join the sets of the formerly divided cells.
