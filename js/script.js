import { Grid } from "./grid.js";
import { Animation } from "./animation.js";

var grid = new Grid(20, 20, false);
document.getElementById("check").onclick = function () {
  console.log(grid);
};
document.getElementById("find").onclick = function () {
  grid.findPath();
  for (let p of grid.path) {
    p.div.innerHTML = Math.floor(p.distance);
  }
  console.log(grid.visited_anim);
  let animation_path = new Animation(grid.path, "path", 100);
};
