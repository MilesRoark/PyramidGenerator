const view = document.getElementById("viewport");
const wincon = document.getElementById("viewport__display");
const genbtn = document.getElementById("viewport__btn");
const character = "!";
const count = 15;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    "&nbsp;".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    "&nbsp;".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "<br>" + row;
}

const output = result;

genbtn.addEventListener("click", () => {
  wincon.innerHTML = output;
  wincon.style.color = "purple";
});
