import { Grid } from "./grid.js";
import { Animation } from "./animation.js";

var grid = new Grid(51, 51, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  // for (let p of grid.path) {
  //   p.div.classList.add("path");
  // }
  let animation_path = new Animation(grid.path, "path", 1);
};

grid.generateMaze();
