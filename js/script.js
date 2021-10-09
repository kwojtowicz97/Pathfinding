import { Grid } from "./grid.js";
import { Animation } from "./animation.js";

var grid = new Grid(
  parseInt(document.getElementById("r").value),
  parseInt(document.getElementById("c").value),
  false
);

function refreshGrid() {
  grid.delete();
  let r = parseInt(document.getElementById("r").value);
  let c = parseInt(document.getElementById("c").value);
  grid = new Grid(r, c, false);
}

document.getElementById("r").addEventListener("input", refreshGrid);
document.getElementById("c").addEventListener("input", refreshGrid);





document.getElementById("create").onclick = function () {
  let r = parseInt(document.getElementById("r").value);
  let c = parseInt(document.getElementById("c").value);
  grid = new Grid(r, c, false);
};

document.getElementById("delete").onclick = function () {
  let g = grid;
  g.delete();
};
document.getElementById("maze").onclick = function () {
  grid.generateMaze();
};

document.getElementById("find").onclick = function () {
  grid.findPath();
  // for (let p of grid.path) {
  //   p.div.classList.add("path");
  // }
  let animation_path = new Animation(grid.path, "path", 1);
};

// grid.generateMaze();
