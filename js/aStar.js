let backtrack = function (node, start) {
  let path = [];
  while (node.parent != start) {
    path.push(node.parent);
    node = node.parent;
  }
  return path.reverse();
};

function aStar(grid) {
  var queue = [grid.start];
  grid.start.distance = 0;
  while (queue != []) {
    // queue = queue.sort(
    //   (a, b) => parseFloat(b.distance) - parseFloat(a.distance)
    // );
    // let curr = queue.pop();
    let map = queue.map((x) => x.distance);
    let curr_idx = map.indexOf(Math.min(...map));
    let curr = queue[curr_idx];
    queue = queue.splice(0, curr_idx).concat(queue.splice(curr_idx + 1));
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
      let x = grid.elementIndex(n)[0] - grid.elementIndex(grid.end)[0];
      let y = grid.elementIndex(n)[1] - grid.elementIndex(grid.end)[1];
      n.distance = Math.sqrt(x * x + y * y);
      queue.push(n);
    }
  }
  return null;
}
export { aStar };
