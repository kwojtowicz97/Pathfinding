let backtrack = function (node) {
  let path = [node];
  while (node.parent) {
    path.push(node.parent);
    node = node.parent;
  }
};

function aStar(grid) {
  let queue = [grid.start];
  while (queue != []) {
    console.log("queue", queue[-1]);
    let curr = queue.pop();
    console.log("curr", curr);
    if (curr == grid.end) {
      return backtrack(grid.end);
    }
    grid.visited.add(curr);
    console.log("visited", grid.visited);
    let nbrs = grid.nbrs(curr);
    for (let n of nbrs) {
      if (n in grid.visited || n.isWall) {
        continue;
      }
      n.parent = curr;
      queue.push(n);
    }
  }
  return null;
}
export { aStar };
