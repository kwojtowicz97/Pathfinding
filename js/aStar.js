let backtrack = function (node, start) {
  console.log("a");
  let path = [];
  while (node.parent != start) {
    path.push(node.parent);
    node = node.parent;
  }
  return path.reverse();
};

function aStar(grid) {
  let queue = [grid.start];
  while (queue != []) {
    let curr = queue.pop(0);
    if (curr == grid.end) {
      return backtrack(grid.end, grid.start);
    }
    grid.visited.add(curr);
    let nbrs = grid.nbrs(curr);
    for (let n of nbrs) {
      if (grid.visited.has(n) || n.isWall) {
        continue;
      }
      n.parent = curr;
      queue.push(n);
    }
  }
  return null;
}
export { aStar };
