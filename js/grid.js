import { Column } from "./column.js";
import { Main } from "./main.js";
import { aStar } from "./aStar.js";

function Grid(noRows, noColumns, drawState) {
  this.fragment = document.createDocumentFragment();
  let t = this;
  this.noRows = noRows;
  this.noColumns = noColumns;
  this.main = new Main(this.noRows, this.noColumns);
  this.start = null;
  this.end = null;
  this.walls = new Set();
  this.visited = new Set();
  this.maze = [];

  this.elements = (function (noRows, noColumns) {
    let temp = [];
    for (let r of Array(noRows).keys()) {
      temp.push([]);
      for (let c of Array(noColumns).keys()) {
        let col = new Column(t, drawState);
        temp[r].push(col);
      }
    }
    document.getElementById("main").appendChild(t.fragment);
    return temp;
  })(this.noRows, this.noColumns);

  this.passClick = function (col, type) {
    if (col.isStart && type == "start") {
      t.start = null;
      col.clearType();
      return;
    }
    if (col.isEnd && type == "end") {
      t.end = null;
      col.clearType();
      return;
    }
    if (col.isWall && type == "wall") {
      t.walls.delete(col);
      col.clearType();
      return;
    }
    col.clearType();
    col.setType(type);
    if (type == "start") {
      if (t.start) {
        t.start.clearType();
      }
      t.start = col;
    }
    if (type == "end") {
      if (t.end) {
        t.end.clearType();
      }
      t.end = col;
    }
    if (type == "wall") {
      t.walls.add(col);
    }
  };

  this.getElementByIndex = function (r, c) {
    return t.elements[r][c];
  };

  this.generateMazeGrid = function () {
    for (let r of Array(t.elements.length).keys()) {
      for (let c of Array(t.elements[0].length).keys()) {
        if (c % 2 == 0 || r % 2 == 0) {
          let col = t.elements[r][c];
          col.setType("wall");
          t.walls.add(col);
        }
      }
    }
  };

  this.elementIndex = function (element) {
    for (let r of Array(t.elements.length).keys()) {
      if (t.elements[r].indexOf(element) != -1) {
        return [r, t.elements[r].indexOf(element)];
      }
    }
  };
  this.findPath = function () {
    t.path = aStar(t);
  };

  this.isIndex = function (r, c) {
    if (t.elements[r] === undefined) return false;
    if (t.elements[r][c] === undefined) return false;
    return true;
  };

  this.nbrs = function (element) {
    if (element) {
      let r = this.elementIndex(element)[0];
      let c = this.elementIndex(element)[1];
      let ret = [];
      let indexes = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];
      for (let i of indexes) {
        if (
          i[0] >= 0 &&
          i[0] < t.elements.length &&
          i[1] >= 0 &&
          i[1] < t.elements[0].length
        ) {
          ret.push(t.getElementByIndex(i[0], i[1]));
        }
      }
      return ret;
    }
    return [];
  };

  this.generateMaze = function () {
    t.generateMazeGrid();
    let pairs = [];
    let visited = new Set();
    let queue = [];

    let chooseStartMazeAtRandom = function () {
      let r = 1 + 2 * Math.floor((Math.random() * (t.noRows - 1)) / 2);
      let c = 1 + 2 * Math.floor((Math.random() * (t.noColumns - 1)) / 2);
      return [r, c];
    };

    let getLegalNeightbourAtRandom = function (elem) {
      let r = elem[0];
      let c = elem[1];
      let nbrs = [
        [r + 2, c],
        [r - 2, c],
        [r, c + 2],
        [r, c - 2],
      ];
      while (nbrs.length > 0) {
        let n = nbrs[Math.floor(Math.random() * nbrs.length)];
        if (!t.isIndex(n[0], n[1])) {
          nbrs = nbrs.filter((item) => item !== n);
          continue;
        }
        if (visited.has(t.elements[n[0]][n[1]])) {
          nbrs = nbrs.filter((item) => item !== n);
          continue;
        }
        return n;
      }
      return false;
    };

    let curr = chooseStartMazeAtRandom();
    while (visited.size != (((t.noColumns - 1) / 2) * (t.noRows - 1)) / 2) {
      let nbr = getLegalNeightbourAtRandom(curr);
      visited.add(t.elements[curr[0]][curr[1]]);
      if (nbr != false) {
        pairs.push([...curr, ...nbr]);
        t.passClick(
          t.elements[(curr[0] + nbr[0]) / 2][(curr[1] + nbr[1]) / 2],
          "wall"
        );
        queue.push([...curr]);
        [curr[0], curr[1]] = [nbr[0], nbr[1]];
      } else {
        for (let h of queue) {
        }
        curr = [...queue.pop()];
      }
    }
    for (let h of queue) {
    }
  };
}

export { Grid };
