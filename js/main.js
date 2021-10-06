export { Main };

function Main(noR, noC) {
  var mainDiv = document.getElementById("main");
  mainDiv.style.gridTemplateRows = "40px ".repeat(noR);
  mainDiv.style.gridTemplateColumns = "40px ".repeat(noC);
  mainDiv.style.columnGap = "2px";
  mainDiv.style.rowGap = "2px";
  return mainDiv;
}
