import { Grid } from "./grid.js";
import { Main } from "./main.js";

var grid = new Grid(10, 10, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  console.log(grid.path);
};
