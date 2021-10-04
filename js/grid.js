import { Column } from "./column.js";
import { Main } from "./main.js";
import { aStar } from "./aStar.js";

function Grid(noRows, noColumns, drawState) {
  let t = this;
  this.noRows = noRows;
  this.noColumns = noColumns;
  this.main = new Main(this.noRows, this.noColumns);
  this.start = null;
  this.end = null;
  this.walls = new Set();
  this.visited = new Set();
  this.visited_anim = [];

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

  this.elements = (function (noRows, noColumns) {
    let temp = [];
    for (let r of Array(noRows).keys()) {
      temp.push([]);
      for (let c of Array(noColumns).keys()) {
        let col = new Column(t, drawState);
        temp[r].push(col);
      }
    }
    return temp;
  })(this.noRows, this.noColumns);

  this.getElementByIndex = function (r, c) {
    return t.elements[r][c];
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

  this.nbrs = function (element) {
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
  };
}

export { Grid };
