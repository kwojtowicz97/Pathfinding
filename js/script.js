import { Grid } from "./grid.js";
import { Animation } from "./animation.js";

var grid = new Grid(21, 21, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  console.log(grid.visited_anim);
  let animation_path = new Animation(grid.path, "path", 100);
};

grid.generateMaze();
