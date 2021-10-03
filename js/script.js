import { Grid } from "./grid.js";

var grid = new Grid(10, 10, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  for (let c of grid.path) {
    c.setPath();
    c.div.innerHTML = grid.path.indexOf(c);
  }
};
