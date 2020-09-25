const EAS = (() => {
  let container = document.querySelector("#container");
  /* grid creation logic */
  setGrid();
  paintCell();
  function setGrid(gridSize = 16) {
    clearGrid();
    container.style.setProperty("--cell", gridSize);
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        container.appendChild(document.createElement("div"));
      }
    }
    paintCell();
  }
  function resetGrid() {
    clearGrid();
    setGrid();
  }
  function clearGrid() {
    container.innerHTML = '';
  }

  /* bound logic to buttons */

  (function () {
    const setGridBtn = document.querySelector("#setgrid");
    const resetGridBtn = document.querySelector("#resetgrid");
    setGridBtn.addEventListener("click", () => {
      let gridSize = prompt("Please, enter a value between 0 and 60 (excluding)");
      while (gridSize < 1 || gridSize > 60) gridSize = prompt("PLEASE A VALUE IN RANGE 1 TO 60");
      setGrid(gridSize);
    })
    resetGridBtn.addEventListener("click", () => resetGrid());
  })();

  /* paint a cell on mouseenter */
  function getColor() {
    let hue = Math.floor(Math.random() * 255);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);
    return { hue, saturation, lightness }
    /* let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return { r, g, b }; */
  }
  function paintCell() {
    let cells = document.querySelectorAll("#container div");
    cells.forEach(cell => {
      let cellColor = getColor();
      cell.addEventListener("mouseenter", () => {
        /* cell.style.backgroundColor = `rgb(${cellColor.r}, ${cellColor.g}, ${cellColor.b})`;
        cellColor = { r: cellColor.r - 50, g: cellColor.g - 50, b: cellColor.g - 50} */
        cell.style.backgroundColor = `hsl(${cellColor.hue}, ${cellColor.saturation}%, ${cellColor.lightness}%)`;
        cellColor.lightness -= 10;
      })
    })
  };
  return { setGrid, resetGrid, getColor }
})()