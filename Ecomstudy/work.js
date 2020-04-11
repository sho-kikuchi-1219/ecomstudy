let random = 1 + Math.floor(Math.random()*16);
console.log(random);

let table = document.getElementById('targetTable');
let newRow = table.insertRow();
let newCell = newRow.insertCell();
let newText = document.createTextNode("あ");
newCell.appendChild(newText);
