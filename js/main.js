export { Main };

function Main(noR, noC) {
  var mainDiv = document.getElementById("main");
  mainDiv.style.gridTemplateRows = "5px ".repeat(noR);
  mainDiv.style.gridTemplateColumns = "5px ".repeat(noC);
  mainDiv.style.columnGap = "0px";
  mainDiv.style.rowGap = "0px";
  return mainDiv;
}
