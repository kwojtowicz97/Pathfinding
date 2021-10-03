var Column = function (grid) {
  this.parent = false;
  this.grid = grid;
  let t = this;
  this.isStart = false;
  this.isEnd = false;
  this.isWall = false;
  this.isVisited = false;
  this.div = document.createElement("div");
  this.div.classList.add("column");
  document.getElementById("main").appendChild(this.div);
  this.clearStart = function () {
    if (t.isStart) {
      t.isStart = false;
      t.div.classList.remove("s");
    }
  };

  this.clearEnd = function () {
    if (t.isEnd) {
      t.isEnd = false;
      t.div.classList.remove("e");
    }
  };
  this.clearWall = function () {
    if (t.isWall) {
      t.isWall = false;
      t.div.classList.remove("w");
    }
  };
  this.clearType = function () {
    t.clearStart();
    t.clearEnd();
    t.clearWall();
  };

  this.setType = function (type) {
    if (type == "start") {
      t.isStart = true;
      t.div.classList.add("s");
    }
    if (type == "end") {
      t.isEnd = true;
      t.div.classList.add("e");
    }
    if (type == "wall") {
      t.isWall = true;
      t.div.classList.add("w");
    }
  };

  this.clk = function () {
    t.grid.passClick(
      t,
      document.querySelector('input[name="select"]:checked').value
    );
  };

  this.div.addEventListener("click", t.clk);

  this.visit = function () {
    this.isVisited = true;
  };
};

export { Column };
