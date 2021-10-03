import { Column } from "./column.js";
import { Main } from "./main.js";
import { aStar } from "./aStar.js";

function Grid(noRows, noColumns, drawState) {
  this.drawState = drawState;
  let t = this;
  this.noRows = noRows;
  this.noColumns = noColumns;
  this.main = new Main(this.noRows, this.noColumns);
  this.start = null;
  this.end = null;
  this.walls = new Set();
  this.visited = new Set();
  this.findPath = function () {
    this.path = aStar(t);
  };

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
}

export { Grid };
