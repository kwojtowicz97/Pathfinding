export { Main };

function Main(noC, noR) {
  let body = document.getElementsByTagName("body");
  var mainDiv = document.createElement("div");
  console.log(mainDiv);
  body[0].appendChild(mainDiv);
  mainDiv.id = "main";
  mainDiv.style.display = "grid";
  mainDiv.style.gridTemplateRows = "40px ".repeat(noR);
  mainDiv.style.gridTemplateColumns = "40px ".repeat(noC);
  mainDiv.style.columnGap = "2px";
  mainDiv.style.rowGap = "2px";
  return mainDiv;
}
