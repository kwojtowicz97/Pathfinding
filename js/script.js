import { Grid } from "./grid.js";
import { Animation } from "./animation.js";

var grid = new Grid(11, 15, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  let animation_path = new Animation(
    grid.path,
    "path",
    Math.floor(1500 / grid.path.length)
  );
};

grid.generateMaze();
