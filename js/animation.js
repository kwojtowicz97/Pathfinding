function Animation(path, cls, interval) {
  var id = setInterval(animate, interval);
  var count = 0;
  function animate() {
    if (count == path.length) {
      clearInterval(id);
    } else {
      path[count].div.classList.add(cls);
      count++;
    }
  }
}

export { Animation };
