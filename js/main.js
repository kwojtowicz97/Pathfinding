export { Main };

function Main(noR, noC) {
  const borderWidth = 1;
  console.log(borderWidth);
  let mainWidth = document.getElementById("main").offsetWidth;
  let mainHeight = document.getElementById("main").offsetHeight;
  let padding = 10;
  let maxColumnHeight = Math.floor(
    (mainHeight - 2 * padding - (noR - 1) * borderWidth) / noR
  );
  let maxColumnWidth = Math.floor(
    (mainWidth - 2 * padding - (noC - 1) * borderWidth) / noC
  );
  let cellSize = Math.min(maxColumnHeight, maxColumnWidth, 40) + "px ";
  var mainDiv = document.getElementById("main");
  mainDiv.style.gridTemplateRows = cellSize.repeat(noR);
  mainDiv.style.gridTemplateColumns = cellSize.repeat(noC);
  mainDiv.style.columnGap = borderWidth + "px";
  mainDiv.style.rowGap = borderWidth + "px";
  return mainDiv;
}
