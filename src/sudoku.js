// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffleNumbers(a) {
  a = a.split("");
  const n = a.length;

  for(let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

function validateInput() {
  // check if cell matches value
  const inputValue = this.value;
  const gridId = this.getAttribute("data-grid-id");
  console.log(this);
  console.log(inputValue);
  console.log(gridId)
  // only allow digits
  const isDigits = inputValue.match(/\d/gi);

  if(inputValue.length !== 0) {
    if(isDigits) {
      console.log(numbers[gridId]);
      if(numbers[gridId] == inputValue) {
        this.style.backgroundColor = "green";
        this.style.color = "white";
      }
      else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
      }
    }
    else {
      alert("Please only enter digits");
      this.value = "";
    }
  }
  else {
    this.style.backgroundColor = "";
    this.style.color = "";
  }
}

function generateGrid(numbers) {
  // generate 3x3 grid
  const board = document.querySelector('.sudoku-board');
  const gridBlock = document.createElement('div');
  gridBlock.className = "grid-block"

  for(let i = 0; i < 9; i++) { // create 9 cells
    const gridCell = document.createElement('div');
    gridCell.className = "grid-cell"
    const cellInput = document.createElement('input');
    cellInput.setAttribute("data-grid-id", i);
    cellInput.type = "text"
    cellInput.addEventListener("input", validateInput);

    gridCell.appendChild(cellInput);
    gridBlock.appendChild(gridCell);
  }

  board.innerText = ""; // empty the div
  board.appendChild(gridBlock);

}

const numbers = shuffleNumbers("123456789");
generateGrid(numbers);